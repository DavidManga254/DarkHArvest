import * as React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function DownloadForm({animeName}){
    const[downloadDetails, setDownloadDetails] = useState({
        start : 1,
        stop : null,
        quality : '360',
        language : 'sub',

    });
    const [searchResults,setSearchResults] = useState(null);

    async function searchAnime(){
        await window.connect.searchAnime(animeName).then((data)=>{
            console.log('received data is',data)
            setSearchResults(data)
        })
    }
    async function downloadAnime(firstLink) {
        window.connect.downloadAnime({
            start : downloadDetails.start,
            stop : downloadDetails.stop,
            first : firstLink,
            name : animeName,
            quality : downloadDetails.quality,
            language : downloadDetails.language
        });
    }

    async function getDetails(firstLink) {
        let response = await window.connect.getDetails(firstLink)

        // console.log('here is the response',response);
        downloadAnime(response.episode)
    }
    return(
        <div className=''>

            <div className='text-white p-2 font-serif border-solid border-2 border-gray-500 rounded-sm'>

            <h2 className='pb=3 font-serif text-white text-lg mb-5'>Download {animeName}</h2>

                <div className='w-full flex mb-5'>
                    <div className=''>
                        <label>Start</label> : <input type='number' onChange={(e)=>setDownloadDetails((previous)=>{
                            return {
                                ...previous,
                                start : e.target.value
                            }
                        })} placeholder={1} min={1} className='w-1/4 text-black text-center' />
                    </div>
                    
                    <div>
                        <label>Stop</label> : <input type='number' onChange={(e)=>setDownloadDetails((previous)=>{
                            return {
                                ...previous,
                                stop : e.target.value
                            }
                        })} min={1} className='w-1/4 text-black text-center' />
                    </div>
                </div>
                <div className='mb-5 flex'>
                    <div className='mr-5'>
                        <label>Quality</label><br></br>
                        <select id="dropdown" className='text-black' placeholder='360p' onChange={(e)=>setDownloadDetails((previous)=>{
                            return {
                                ...previous,
                                quality : e.target.value
                            }
                        })} >
                            <option value="360">360p</option>
                            <option value="480">480p</option>
                            <option value="720">720p</option>
                            <option value="1080">1080p</option>
                        </select>
                    </div>
                    
                </div>
                <div className='mb-5'>
                    <label>Language</label><br></br>
                    <select id="dropdown" className='text-black' onChange={(e)=>setDownloadDetails((previous)=>{
                            return {
                                ...previous,
                                language : e.target.value
                            }
                        })} >
                        <option value="sub">SUB</option>
                        <option value="eng">DUB</option>
                    </select>
                </div> 
                <div className='w-full flex justify-center'>
                    <button className='c bg-blue-500 p-1 rounded-md' onClick={searchAnime}>Download</button>
                </div>
            </div>
            <div  className="anime-list w-full flex flex-row flex-wrap">
                {
                    searchResults === null?<p>loading</p>:
                    searchResults.map((anime,index)=>{
                        return <div key={index} className="w-[45%] m-2 hover:cursor-pointer hover:scale-105">
                        <div className="relative w-full" onClick={() => getDetails(anime.link)} >
                            <div className="w-full">
                                <img className="w-full rounded-lg" style={{ aspectRatio: '16/20' }} src={anime.cover?anime.cover:null}/>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-white font-bold lg:text-sm">{anime.name?anime.name:null}</h2>
                        </div>
                    </div>
                    })
                }
            </div>
            
        </div>
    )
}