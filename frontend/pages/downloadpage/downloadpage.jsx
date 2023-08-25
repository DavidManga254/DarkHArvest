import { useLocation } from "react-router-dom";
import * as React from 'react';
import { AnimeList } from "../../components/animelist/list.jsx";
import { useState, useEffect } from "react";
import { SideBar } from "../../components/sidebar/sidebar.jsx";
import { getTrendingAnime } from "../../../anilist-api/anilist-api.js";
import TruncatedText from "../../components/stringcut/sringcut.jsx";
import CountdownTimer from "../../components/countdown/countdown.jsx";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Modal } from "../../components/modal/modal.jsx";
import { DownloadForm } from "../../components/downloadForm/downloadForm.jsx";
import { useDispatch, useSelector } from 'react-redux';


//download page
const DownloadPage = React.memo(() => {
    const [animeInfo,setAnimeInfo] = useState(null);
    const [inFavourite,setFavouriteState] = useState(null);
    const [addFavVisible, setaddFavVisible] = useState(false);
    const [removeFavVisible, setremoveFavVisible] = useState(false);

    //location
    const location =useLocation();
    const dispatch = useDispatch();
    const currentDownlaodAnime = useSelector(state => state.ChangeStoreData.currentDownloadanime);
    console.log('now is',location.state);
    
    async function checkFav(){
        //console.log("passing animeinfo",location.state)
        
        await window.connect.manageFavourite({
                    type :'checkExistence',
                    payload : location.state
        }).then((data)=>{
            setFavouriteState(data);
        })

    }

    useEffect(()=>{
        if(location.state !== null ){
            dispatch({
                type : 'changeCurrentDownloadAnime',
                payload : location.state
            })
        } else if (location.state === null ){
            console.log('location is null')
            console.log('current anime is',currentDownlaodAnime)
            setAnimeInfo(currentDownlaodAnime);
        }

        
        setAnimeInfo(location.state);
        
       
        (async()=>{
            await checkFav();   
        })();

        
    },[location.state])
    
    

   
    //control modal
    useEffect(() => {
        let timeoutId;

        if (addFavVisible) {
        timeoutId = setTimeout(() => {
            setaddFavVisible(false);
        }, 3000); // Delay for 3 seconds before hiding the child component
        }

        return () => {
        clearTimeout(timeoutId);
        };
    }, [addFavVisible]);

    useEffect(() => {
        let timeoutId;

        if (removeFavVisible) {
        timeoutId = setTimeout(() => {
            setremoveFavVisible(false);
        }, 3000); // Delay for 3 seconds before hiding the child component
        }

        return () => {
        clearTimeout(timeoutId);
        };
    }, [removeFavVisible]);
    

    async function addFavourites(){
        await window.connect.manageFavourite({
            type:"addFavourite",
            payload : animeInfo
        }).then((data)=>{
            console.log("has fav been added?",data);
        })
        setFavouriteState(true)
        setaddFavVisible(true);
    }

    async function removeFavourite(){
        await window.connect.manageFavourite({
            type:"removeFavourite",
            payload : location.state
        })
        setFavouriteState(false);
        setremoveFavVisible(true)
    }

    return(<>
    {
        // if anime info is null display loading screen
        animeInfo === null ? <div><h2 className="text-white text-lg">Should be loading screen</h2></div>
        
        :
        //display page with anime info
        <div className="page-layout">
            {
                addFavVisible? <Modal modalInfo={`${animeInfo.title.romaji?animeInfo.title.romaji:animeInfo.title.english} added to favourites`} /> : null
            }
            {
                removeFavVisible? <Modal modalInfo={`${animeInfo.title.romaji?animeInfo.title.romaji:animeInfo.title.english} removed from favourites`} /> : null
            }
            <div className="sidebar">
                <SideBar/>
            </div>
            <div className="mainbar ">
                {/* banneer */}
                <div className="lg:flex w-full lg:justify-between">
                        <div>
                        {/* left section */}
                        <div className="w-full flex flex-row text-white">
                            {/* anime image */}
                            <div className="1">
                                <img className="w-[85%]  aspect-auto" src={animeInfo.coverImage}/>
                            </div>
                            {/* anime info */}
                            <div>
                                <h1 className="text text-xl font-bold mb-2">{animeInfo.title.romaji?animeInfo.title.romaji:animeInfo.title.english}</h1>
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
                                    {
                                        inFavourite === true? 

                                        <h2><FavoriteIcon onClick={removeFavourite}  className="text-hoverColor hover:cursor-pointer" /></h2>

                                        :
                                        <h2><FavoriteIcon onClick={addFavourites} className="hover:cursor-pointer hover:text-hoverColor" /></h2>
                                    }
                                </div>

                                
                            </div>
                        </div>

                        {/* right section */}

                        <div className="w-full flex flex-row mt-5 mb-6">
                            <div className="lg:w-3/4 sm:w-full">
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
                    <div className="flex justify-center w-2/4">
                        <div className="m-0">
                            <DownloadForm animeName={animeInfo.title.romaji?animeInfo.title.romaji:animeInfo.title.english} />
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
        </div>
    }
    
    
    
    </>

    )
});
export default DownloadPage;