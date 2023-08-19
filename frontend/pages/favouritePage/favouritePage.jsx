import * as React from 'react';
import {useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { SideBar } from '../../components/sidebar/sidebar.jsx';
import { AnimeList } from '../../components/animelist/list.jsx';

export function FavouritePage(){

    const [favList,setFavList] = useState(null);

    async function readFavs(){
        await window.connect.manageFavourite({
            type :'retriveFavourite',
            payload : location.state
        }).then((data)=>{
            console.log('received data is',data)
            setFavList(data)
        })
    }

    useEffect(()=>{
        readFavs();
    },[]);


    return(
        <>
        {
            favList === null ? <h2>Loda Page</h2>
            :
            <div className='page-layout'>
                <div className='sidebar'>
                    <SideBar/>
                </div>
                <div className='mainbar'>
                    <AnimeList animeList={favList}/>
                </div>
            </div>
        }
        
        </>
    )
}