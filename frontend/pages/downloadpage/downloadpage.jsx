import { useLocation } from "react-router-dom";
import * as React from 'react';
import { AnimeList } from "../../components/animelist/list.jsx";
import { useState, useEffect } from "react";
import { SideBar } from "../../components/sidebar/sidebar.jsx";
import { getTrendingAnime } from "../../../anilist-api/anilist-api.js";
import TruncatedText from "../../components/stringcut/sringcut.jsx";
import CountdownTimer from "../../components/countdown/countdown.jsx";
//download page
export function DownloadPage(){
    //location
    const location =useLocation();

    // const [downloadOption, setDownloadOption] = useState("");
    // const [rangeFrom, setRangeFrom] = useState("");
    // const [rangeTo, setRangeTo] = useState("");

    // const handleDownloadOptionChange = (event) => {
    //     setDownloadOption(event.target.value);
    // };

    // const handleRangeFromChange = (event) => {
    //     setRangeFrom(event.target.value);
    // };

    // const handleRangeToChange = (event) => {
    //     setRangeTo(event.target.value);
    // };

    // const handleSubmit =async (event) => {
    //     event.preventDefault();
    //     console.log("Download Option:", downloadOption);
    //     if (downloadOption === "range") {
    //     console.log("Range From:", rangeFrom);
    //     console.log("Range To:", rangeTo);
    //     }
    //     if(downloadOption==='all'){
    //         await window.connect.downloadAnime({
    //             start:1,
    //             stop:undefined,
    //             first:data.episode,
    //             name:data.name
    //         });
    //     }else if(downloadOption ==='range'){
    //         await window.connect.downloadAnime({
    //             start:parseInt(rangeFrom),
    //             stop:parseInt(rangeTo),
    //             first:data.episode,
    //             name:data.name
    //         });
    //     }
    // };

    useEffect(()=>{
        (async()=>{
            const response = await getTrendingAnime();
            console.log(response)
        })();
    },[]);
    const animeInfo = {
        "title": {
            "english": "Tengoku Daimakyo",
            "romaji": "Tengoku Daimakyou"
        },
        "id": 155783,
        "coverImage": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx155783-X23WQwPmI9Sh.jpg",
        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/155783-MXHfdquIBoHA.jpg",
        "status": "RELEASING",
        "episodes": 13,
        "season": "SPRING",
        "description": "In the year 2024, the world has collapsed. Grotesque monsters lurk amongst the ruins of Japan, while remaining people scrape together what they can to survive. Kiruko, an odd-job girl in Nakano, accepts a mysterious woman's dying wish to take a boy named Maru to a place called Heaven.<br>\n<br>\n(Source: Disney+, edited)",
        "meanScore": 81,
        "genres": [
            "Adventure",
            "Mystery",
            "Sci-Fi",
            "Thriller"
        ],
        "studio": "Production I.G",
        "rank": {
            "popularity": 212,
            "rating": 462,
            "year": 0
        },
        "trailer": "https://youtube.com/watch?v=Sld5uW_BJU4",
        "startDate": "1-4-2023",
        "endDate": "24-6-2023",
        "nextAiringEpisode": {
            "timeUntilAiring": "7 days",
            "airingOn": "16:00:00 24-06-2023",
            "episode": 13
        }
    }
    
    return(
        // <div className="page-layout">
        //     <div className="sidebar">
        //         <SideBar/>
        //     </div>
        //     <div className="mainbar">
        //         <div>
        //             <img src={animeInfo.bannerImage !== undefined?animeInfo.bannerImage:null} />
        //         </div>
        //         {/* header section */}
        //         <div>
        //             <h1>{animeInfo.title !== undefined? animeInfo.title.romaji:null}</h1>
        //             <div>
        //                 {
        //                     animeInfo.genres !== undefined? animeInfo.genres.map((genre,index)=>{
        //                         if(index!==animeInfo.genres.length-1){
        //                             return(
        //                                 <span className="md:text-xs text-grey w-full break-words" key={index}>{genre}, </span>
        //                             )
        //                         }else{
        //                             return(
        //                                 <span className="md:text-xs text-grey w-full break-words" key={index}>{genre}</span>
        //                             )
        //                         }
        //                     }):null
        //                 }
                        
        //             </div>
        //         </div>
        //         {/* division section */}
        //         <div className="flex flex-row">
        //                 <div className="bg-blue-500 w-1/2">
        //                         {/* left */}
        //                         <div>
        //                             {
        //                                 animeInfo.studio !== undefined || animeInfo.studio? <div><span>Studio:</span>{animeInfo.studio}<span></span></div>:null
        //                             }
        //                         </div>
        //                         <div>

        //                             {
        //                                 animeInfo.status !== undefined?<div><span>Status:</span>{animeInfo.status}<span></span></div>:null
        //                             }

        //                         </div>
        //                         <div>

        //                             {
        //                                 animeInfo.nextAiringEpisode.airingOn !== undefined || animeInfo.season?<div><span>Time to Air:</span><CountdownTimer targetDate={animeInfo.nextAiringEpisode.airingOn}/> <span></span></div>:null
        //                             }

        //                         </div>
        //                         <div>
        //                             {
        //                                 //animeInfo.description !== undefined || animeInfo.description?<TruncatedText text={animeInfo.description} maxLength={200}/>:null
        //                             }
        //                         </div>
        //                         <div>
        //                             {
        //                                 animeInfo.season !== undefined || animeInfo.season? <div><span>Season:</span>{animeInfo.season}<span></span></div>:null
        //                             }
        //                         </div>
                                
                                
        //                 </div>
        //                 {/* right section */}
        //                 {/* <div className="flex-grow bg-blue-500">
        //                         {/* trailer *
        //                         <div>
        //                             {
        //                                 animeInfo.trailer !== undefined? <iframe
        //                                 className="video-iframe"
        //                                 src={animeInfo.trailer.replace("https://youtube.com/watch?v=","https://www.youtube.com/embed/")}
        //                                 title="YouTube Video"
        //                                 frameBorder="0"
        //                                 allowFullScreen
        //                             /> : null
        //                             }
        //                         </div>
        //                 </div> */}
        //         </div>
                
        //     </div>
        // </div>

        <div className="page-layout">
            <div className="sidebar">
                <SideBar/>
            </div>
            <div className="mainbar">
                {/* banneer */}
                <div className="w-full">
                    <img src={animeInfo.bannerImage} className="w-full aspect-auto"></img>
                </div>

                <div className="flex flex-row bg-red-500 w-full">
                    {/* left section */}
                    <div className="w-[25%]">
                        {/* anime image */}
                        <div>
                            <img src={animeInfo.coverImage}/>
                        </div>
                        {/* anime info */}
                        <div>
                            <h2>{animeInfo.title.romanji}</h2>
                            <div>
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
                        </div>
                    </div>

                    {/* right section */}

                    <div>
                        <div>
                            {/* trailer section */}
                            <div>
                                {
                                        animeInfo.trailer !== undefined? <iframe
                                        className="video-iframe"
                                        src={animeInfo.trailer.replace("https://youtube.com/watch?v=","https://www.youtube.com/embed/")}
                                        title="YouTube Video"
                                        frameBorder="0"
                                        allowFullScreen
                                    /> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}