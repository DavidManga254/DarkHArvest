import { useLocation } from "react-router-dom";
import * as React from 'react';
import { AnimeList } from "../../components/animelist/list.jsx";
import { useState, useEffect } from "react";
import { SideBar } from "../../components/sidebar/sidebar.jsx";
import { getTrendingAnime } from "../../../anilist-api/anilist-api.js";
import TruncatedText from "../../components/stringcut/sringcut.jsx";
import CountdownTimer from "../../components/countdown/countdown.jsx";
import FavoriteIcon from '@mui/icons-material/Favorite';

//download page
export function DownloadPage(){
    const [animeInfo,setAnimeInfo] = useState(null);
    const [inFavourite,setFavouriteState] = useState(null);

    //location
    const location =useLocation();

    

    useEffect(()=>{
        
        
        async function checkFav(){
        console.log("passing animeinfo",location.state)
        await window.connect.manageFavourite({
                    type :'checkExistence',
                    payload : animeInfo
        }).then((data)=>{
            setFavouriteState(data);
        })
        }
        (async()=>{
            await checkFav();   
        })();

        setAnimeInfo(location.state);
    },[])
    

    
    // (async()=>{
    //     await window.connect.manageFavourite({
    //         type :'checkExistence',
    //         payload : animeInfo
    //     }).then((response)=>{
            
            
    //         console.log("received backed is".response)
    //         setFavouriteState(response)})
    // })();

    console.log("already in favs?",inFavourite);
    

    async function addFavourites(){
        await window.connect.manageFavourite({
            type:"addFavourite",
            payload : animeInfo
        }).then((data)=>{
            console.log("has fav been added?",data);
        })
    }

    return(<>
    {
        //if anime info is null display loading screen
        animeInfo === null ? <div><h2 className="text-white text-lg">Should be loading screen</h2></div>
        
        :
        //display page with anime info
        <div className="page-layout">
            <div className="sidebar">
                <SideBar/>
            </div>
            <div className="mainbar">
                {/* banneer */}

                <div className="w-full">
                    {/* left section */}
                    <div className="w-full flex flex-row text-white">
                        {/* anime image */}
                        <div className="1">
                            <img className="w-[85%]  aspect-auto" src={animeInfo.coverImage}/>
                        </div>
                        {/* anime info */}
                        <div>
                            <h1 className="text text-xl font-bold mb-2">{animeInfo.title.romaji}</h1>
                            <div className ="mb-2">
                                {
                                    animeInfo.genres !== undefined || animeInfo.genres? animeInfo.genres.map((genre,index)=>{
                                        if(index!==animeInfo.genres.length-1){
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
                            <div className ="mb-2">
                                     {
                                         animeInfo.studio !== undefined && animeInfo.studio? <div><span>Studio: </span>{animeInfo.studio}<span></span></div>:null
                                     }
                            </div>

                            <div className ="mb-2">
                                    {
                                     animeInfo.season !== undefined && animeInfo.season? <div><span>Season: </span>{animeInfo.season}<span></span></div>:null
                                    }
                            </div>

                            <div className ="mb-2">

                                    {
                                         animeInfo.status !== undefined && animeInfo.status?<div><span>Status: </span>{animeInfo.status}<span></span></div>:null
                                     }

                            </div>

                            <div className ="mb-2">

                                {
                                     animeInfo.nextAiringEpisode !== undefined && animeInfo.nextAiringEpisode?<div><span>Time to Air: </span><CountdownTimer targetDate={animeInfo.nextAiringEpisode.airingOn}/> <span></span></div>:null
                                }

                            </div>
                            
                            <div className ="mb-2">
                                <h2><FavoriteIcon onClick={addFavourites} className="hover:cursor-pointer hover:text-hoverColor" /></h2>
                            </div>

                            
                        </div>
                    </div>

                    {/* right section */}

                    <div className="w-full flex flex-row mt-5">
                        <div className="w-1/2">
                            {/* storyline */}
                            <div>
                                {
                                    animeInfo.description !== undefined || animeInfo.description?<div>
                                        <h2 className="text-lg text-white">Storyline</h2>
                                        <TruncatedText maxLength={250} text={animeInfo.description}/>
                                    </div> : null
                                }
                            </div>
                            {/* trailer section */}
                            <div className="w-full mt-5">
                                {
                                        animeInfo.trailer !== undefined?<div>
                                            <h2 className="text-lg text-white">Preview</h2>
                                                <iframe
                                        className="w-full aspect-video"
                                        src={animeInfo.trailer.replace("https://youtube.com/watch?v=","https://www.youtube.com/embed/")}
                                        title="YouTube Video"
                                        allowFullScreen
                                    />
                                        </div> : <div>
                                            <h2 className="text-lg text-white">No Preview Available</h2>
                                                <iframe
                                        className="w-full aspect-video"
                                        src={"https://www.youtube.com/embed/dQw4w9WgXcQ"}
                                        title="YouTube Video"
                                        allowFullScreen
                                    />
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
    
    
    
    </>

    )
}