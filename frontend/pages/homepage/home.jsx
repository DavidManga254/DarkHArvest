import { SplashScreen } from '../../components/splashscreen/splashpage.jsx'
import * as React from 'react';
//simport { ipcRenderer } from 'electron';
import { searcher } from '../../../src/renderer.js';
import {useNavigate } from 'react-router-dom';
import { SideBar } from '../../components/sidebar/sidebar.jsx';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingAnime } from '../../../anilist-api/anilist-api.js';
import TruncatedText from '../../components/stringcut/sringcut.jsx';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { AnimeList } from '../../components/animelist/list.jsx';



//homepage
export function Homepage(){
    //navigate
    const navigate = useNavigate();

    const [animeData, setList] = useState({
        mainCoverAnime:null,
        recommendedAnime:null

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
                
              //take number one trending
              let trendingApiResponseCover = trendingApiResponse[0];

              if(trendingApiResponseCover.bannerImage === null || trendingApiResponseCover.bannerImage === undefined){
                let incrementor = 0;
                while(trendingApiResponseCover.bannerImage === null || trendingApiResponseCover.bannerImage === undefined){
                    trendingApiResponseCover = trendingApiResponse[incrementor];
                    incrementor++;
                }
              }

              //store fetched data

              dispatch({
                type:"changeRecommendedData",
                payload: trendingApiResponse
              });

              setList((previous)=>{
                return{
                    ...previous,
                    mainCoverAnime : trendingApiResponseCover,
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
                    mainCoverAnime : HomeDataCover,
                    recommendedAnime : recommendedData
                }
            });
            setLoader(false);

        }
      }, []);

   
    //function to take search request
    async function  handleSearchRequest(event){
        if (event.keyCode === 13){
            let results;
            //anime name
            let request = event.target.value;
            results= await window.connect.searchAnime(request);
            

            navigate('/search',{state:{
                name:request,
                list:results
            }});
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
                <div>
                    <AnimeList animeList={animeData.recommendedAnime}/>
                </div>


            </div>
        </div>
        }
    
    </>
        
    )
}