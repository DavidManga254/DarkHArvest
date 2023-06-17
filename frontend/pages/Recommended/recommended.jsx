import { getTrendingAnime } from "../../../anilist-api/anilist-api";
import React from "react";
import {useEffect,useState} from "react";
import StarIcon from '@mui/icons-material/Star';


export function Recommended(){
    const [animeList, setList] = useState(null);
    //get trending anime
    useEffect(()=>{
        (async()=>{
            let response = await getTrendingAnime();
            console.log("here is the reposne",response);
            setList(response);
        })();
        
    },[]);

    //return conditions
    return animeList === null ? <div>Hello world</div>
    :  
        <div>
            <div className="w-full flex flex-row flex-wrap">
                {
                    animeList.map((anime,index)=>{
                        return(
                            <div key={index} className="sm:w-[40%] md:w-[23%] m-2 hover:cursor-pointer">
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