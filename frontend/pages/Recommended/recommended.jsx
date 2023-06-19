import { getTrendingAnime } from "../../../anilist-api/anilist-api";
import React from "react";
import {useEffect,useState} from "react";
import StarIcon from '@mui/icons-material/Star';
import { SideBar } from "../../components/sidebar/sidebar.jsx";
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { Store } from "../../reduxStore/createstore";


export function Recommended(){
     const [animeList, setList] = useState(null);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    //console.log("here is the state",Store.getState().ChangeStoreData.recommendedPage);

    const recommendedData = useSelector(state => state.ChangeStoreData.recommendedPage);


    useEffect(() => {
        if (recommendedData === null) {
          async function fetchData() {
            try {
              const apiResponse = await getTrendingAnime();
              console.log("it is null")
              //console.log("what we are dispatching is ",apiResponse)
              dispatch({
                type:"changeRecommendedData",
                payload: apiResponse
              });
              setList(apiResponse);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }
    
          fetchData();
        }else{
            console.log("well it was not null");
            setList(recommendedData);
        }
      }, [dispatch, recommendedData]);


    //get trending anime
    // useEffect(()=>{
    //     (async()=>{
    //         let response = await getTrendingAnime();
    //         // console.log("here is the reposne",response);
    //         setList(response);
    //         console.log(response);
    //     })();
        
    // },[]);
    //navigate function
    function navigateToDetails(animeData){
        navigate("/download",{
            state:animeData
        });
    }

    //return conditions
    return animeList === null ? <div>Hello world</div>
    :  
        <div className="page-layout">
            <div className="sidebar">
                <SideBar/>
            </div>
            <div className="mainbar">
                {
                    animeList.map((anime,index)=>{
                        return(
                            <div onClick={(()=>navigateToDetails(anime))} key={index} className="sm:w-[30%] md:w-[22%] lg:w-[15%] m-2 hover:cursor-pointer hover:scale-150">
                                <div className="relative w-full">
                                    <div className="absolute">
                                        <div className="rounded-3xl bg-rateBackground">
                                            <p className="text-rateColor text-xs m-1">{anime.meanScore?anime.meanScore:"No rating"}  <StarIcon sx={{ fontSize: 15 }} className="text-sm"/></p>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <img className="w-full rounded-lg" style={{ aspectRatio: '16/20' }} src={anime.coverImage?anime.coverImage.replace("medium","medium"):null}/>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-white font-bold lg:text-sm">{anime.title?anime.title.romaji:null}</h2>
                                    {
                                        anime.genres?anime.genres.map((genre,index)=>{
                                            if(index!==anime.genres.length-1){
                                                return(
                                                    <span className="md:text-xs text-grey w-full break-words" key={index}>{genre}, </span>
                                                )
                                            }else{
                                                return(
                                                    <span className="md:text-xs text-grey w-full break-words" key={index}>{genre}</span>
                                                )
                                            }
                                        }):null
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    
}