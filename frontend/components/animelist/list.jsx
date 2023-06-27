import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';


export function AnimeList({animeList}){
    //navigate
    const navigate = useNavigate();
    
    function navigateToDetails(animeData){
        navigate("/download",{
            state:animeData
        });
    }

    return(
        <div className="anime-list w-full flex flex-row flex-wrap">
            
            {
                    animeList.map((anime,index)=>{
                        return(
                            <div onClick={(()=>navigateToDetails(anime))} key={index} className="sm:w-[30%] md:w-[22%] lg:w-[15%] m-2 hover:cursor-pointer hover:scale-105">
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
    )
}