import * as React from 'react';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { SideBar } from '../../components/sidebar/sidebar.jsx';
import { searchAnimeQuery } from './searchPageViewModel.js';
import { useDispatch, useSelector } from 'react-redux';
import { AnimeList } from '../../components/animelist/list.jsx';
import { Header } from '../../components/header/header.jsx';

export function SearchPage(){
    const location = useLocation();
    const dispatch = useDispatch();
    
    const [searchResults, setSearchResults] = useState(null);

    const searchResultsStore = useSelector((state)=>state.ChangeStoreData.searchResults);

    async function setSearchData(){
        try {
            let searchResults = await searchAnimeQuery(location.state)
            
            dispatch({
                type : 'changeSearchresults',
                payload : {
                    name : location.state,
                    searchResults : searchResults
                }
            })

            setSearchResults(searchResults);

        } catch (error) {
            console.log('error setting search results');
        }
    }
    useEffect(()=>{
        
        if(searchResultsStore === null || searchResultsStore.name !== location.state){
            (async() => {
                await setSearchData();
            })();
        } else {
            setSearchResults(searchResultsStore);
        }
    },[]);
    
    console.log('here it is',searchResults)
    return(
        <>
        {
            searchResults === null ? <div>Loading screen</div> : <div className="page-layout">
            <div className='sidebar'>
                <SideBar/>
            </div>
            <div className='mainbar'>
            <div className='w-full pb-5'>
                <h2 className='text-white text-4xl font-serif'>
                    {location.state} search results
                </h2>
            </div>
                <div className='w-full pb-3'>
                    <Header/>
                </div>
                <div>
                    <AnimeList animeList={searchResults} />
                </div>

            </div>
        </div>
        }
    </>
    )
}