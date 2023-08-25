import * as React from 'react';
import { getAnimeCategories } from './categories_view_model';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimeList } from '../../components/animelist/list.jsx';
import { SideBar } from '../../components/sidebar/sidebar.jsx';
import { getAnimeGenre } from './categories_view_model';
import { Header } from '../../components/header/header.jsx';

export function CategoriesPage({}){
    const  dispatch = useDispatch();
    const location = useLocation();

    const [categoriesData, setCategoriesData] = useState(null);

    const categories = useSelector(state => state.ChangeStoreData.categories);

    console.log('her is stored categories',categories);
    console.log('here is passed genre',location.state)
    async function setGenreList(){
        try {
            let response = await getAnimeGenre(location.state);

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
            console.log('part 1 ran');
            (async() => {
                await setGenreList();
            })();
        } else if (categories !== null && categories.name !== location. state) {
            console.log('part 2 ran');
            (async() => {
                await setGenreList();
            })();
        } else {
            console.log('part 3 ran');

            setCategoriesData(categories.genreList);
        }
    },[]);


    return(
        <>
    
        {
           categoriesData === null? <h2>Loading screen manzee</h2> :<div className="page-layout">
            <div className='sidebar'>
                <SideBar/>
            </div>
            
            <div className='mainbar'>
            <div className='w-full pb-5'>
                <h2 className='text-white text-4xl font-serif'>
                    {location.state} anime
                </h2>
            </div>
                <div className='w-full pb-3'>
                    <Header/>
                </div>
                <AnimeList animeList={categoriesData}/>

            </div>
        </div>
        }
    
    </>
    )
        

    
}