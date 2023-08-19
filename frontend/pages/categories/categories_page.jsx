import * as React from 'react';
import { getAnimeCategories } from './categories_view_model';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAnimeByGenre } from '../../../anilist-api/anilist-api';
import { AnimeList } from '../../components/animelist/list.jsx';
import { SideBar } from '../../components/sidebar/sidebar.jsx';

export function CategoriesPage({}){
    const  dispatch = useDispatch();
    const location = useLocation();

    const [categoriesData, setCategoriesData] = useState(null);

    const categories = useSelector(state => state.ChangeStoreData.categories);

    async function setGenreList(){
        try {
            let response = await getAnimeByGenre(location.state);
            console.log('here is response',response)

            dispatch({
                type:"changeCategories",
                payload: {
                    name : location.state,
                    genreList : response
                }
            });
            setCategoriesData(response);
        } catch (error) {
            console.log('unable to set categories',error);
        }
    }


    useEffect(()=>{
        if(categories === null){
            (async() => {
                await setGenreList();
            })();
        } else if (categories !== null && categories.name !== location. state) {
            (async() => {
                await setGenreList();
            })();
        } else {
            setCategoriesData(categories.genreList);
        }
    })


    return(
        <>
    
        {
           categoriesData === null? <h2>Loading screen manzee</h2> :<div className="page-layout">
            <div className='sidebar'>
                <SideBar/>
            </div>
            <div className='mainbar'>
                <AnimeList animeList={categoriesData[0]}/>

            </div>
        </div>
        }
    
    </>
    )
        

    
}