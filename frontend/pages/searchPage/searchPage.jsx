import * as React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { SideBar } from '../../components/sidebar/sidebar.jsx';

export function SearchPage(){
    const navigate = useNavigate();
    const location = useLocation
    
    const [searchResults, setSearchResults] = useState(null);

    return(
        <>
    
        
           <div className="page-layout">
            <div className='sidebar'>
                <SideBar/>
            </div>
            <div className='mainbar'>

                <div className='w-full h-screen lex flex-col place-content-center text-center place-items-center'>
                    <div>
                        <input type='text' placeholder='search anime'/>
                    </div>
                </div>

            </div>
        </div>
        
    
    </>
    )
}