import { SplashScreen } from '../../components/splashscreen/splashpage.jsx'
import * as React from 'react';
import {useNavigate } from 'react-router-dom';
import { SideBar } from '../../components/sidebar/sidebar.jsx';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingAnime } from '../../../anilist-api/anilist-api.js';
import { AnimeList } from '../../components/animelist/list.jsx';
import { getAnimeCategories } from '../categories/categories_view_model.js';
import { GenreMenu } from '../../components/menu/menu.jsx';

//homepage
export function Homepage(){
    //navigate
    const navigate = useNavigate();

    const [animeData, setList] = useState({
        recommendedAnime:null,
        categories : null

    });
    const [loader,setLoader] = useState(true)

    const dispatch = useDispatch();

    //take page data from redux store main cover anime, recommended data

    const HomeDataCover = useSelector(state => state.ChangeStoreData.homePageCover);
    const recommendedData = useSelector(state => state.ChangeStoreData.recommendedPage);
    const categories = useSelector(state => state.ChangeStoreData.genre);

    // check if exists in store
    useEffect(() => {       
        if (recommendedData === null) {
           async function fetchData() {
            try {
              let trendingApiResponse = await getTrendingAnime();
                
              //store fetched data

              dispatch({
                type:"changeRecommendedData",
                payload: trendingApiResponse
              });
              setList((previous)=>{
                return{
                    ...previous,
                    recommendedAnime : trendingApiResponse
                }
              });
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }
    
          fetchData();
        }else{
            setList((previous)=>{
                return{
                    ...previous,
                    recommendedAnime : recommendedData
                }
            });
            setLoader(false);

        }

        if(categories === null){
            (async()=>{
                try {
                    let response = await getAnimeCategories();

                    dispatch({
                        type:"changeGenreList",
                        payload: response
                    });

                    setList((previous) => {
                        return {
                            ...previous,
                            categories : response
                        }
                    });
                    
                } catch (error) {
                    console.log('erroegetting categories',error);
                }
            })();
        } else {
            setList((previous) => {
                return {
                    ...previous,
                    categories : categories
                }
            });
        }
      }, []);

   
    //function to take search request
    async function  handleSearchRequest(event){
        if (event.keyCode === 13){
            navigate('/search',{state:event.target.value});
        }    
    }



    return(<>
    
        {
           animeData.recommendedAnime === null? <h2>Loading screen</h2> :<div className="page-layout">
            <div className='sidebar'>
                <SideBar/>
            </div>
            <div className='mainbar'>
                {/* movie choice cover section */}
                {/* animelist */}
                <div className='flex justify-between w-full'>
                    <div className='w-1/2'>
                       {
                            animeData.categories === null ? null :
                            <GenreMenu genreList={animeData.categories}/>
                       } 
                    </div>
                    
                    <div className='w-1/2 flex justify-end pr-3'>
                        <input onChange={(event)=>handleSearchRequest(event)}  className='h- h-3/4 focus bg-slate-600 text-white p-2'  type='text' placeholder='search anime'/>

                    </div>
                </div>
                <div>
                    <AnimeList animeList={animeData.recommendedAnime[0]}/>
                </div>


            </div>
        </div>
        }
    
    </>
        
    )
}