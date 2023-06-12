import { AnimeList } from "../../components/animelist/list.jsx";
import { useLocation } from "react-router-dom";
import * as React from 'react'
export function SearchResults(){
    //location
    const location = useLocation();

    //receive data
    const data = location.state;

    
    
    console.log('received',data);
    return(
        <div className="search-page">
            <div className="search-title">
                <h2>SEARCH RESULTS FOR {data.name} </h2>
            </div>
            <div className="search-results">
                <AnimeList list={data.list}/>
            </div>

        </div>
    )
}