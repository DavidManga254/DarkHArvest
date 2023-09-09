import { SplashScreen } from '../../components/splashscreen/splashpage.jsx'
import * as React from 'react';
import {useNavigate } from 'react-router-dom';
import { SideBar } from '../../components/sidebar/sidebar.jsx';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingAnime } from '../../../anilist-api/anilist-api.js';
import { AnimeList } from '../../components/animelist/list.jsx';
import { Header } from '../../components/header/header.jsx';
import { DownloadForm } from '../../components/downloadForm/downloadForm.jsx';

//homepage
export function Homepage(){
    //navigate
    const navigate = useNavigate();

    const [animeData, setList] = useState({
        recommendedAnime:null,

    });
    const [loader,setLoader] = useState(true)

    const dispatch = useDispatch();

    //take page data from redux store main cover anime, recommended data

    const HomeDataCover = useSelector(state => state.ChangeStoreData.homePageCover);
    const recommendedData = useSelector(state => state.ChangeStoreData.recommendedPage);

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
      }, []);



    return(<>
    
        {
           animeData.recommendedAnime === null? <h2>Loading screen</h2> :<div className="page-layout">
            <div className='sidebar'>
                <SideBar/>
            </div>
            <div className='mainbar'>
                {/* movie choice cover section */}
                {/* animelist */}
                <Header/>
                <div>
                    <AnimeList animeList={animeData.recommendedAnime[0]}/>
                </div>


            </div>
        </div>
        }
    
    </>
        
    )
}