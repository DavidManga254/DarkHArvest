import * as React from 'react';
import { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAnimeCategories } from '../../pages/categories/categories_view_model';
import { GenreMenu } from '../menu/menu.jsx';
import { useNavigate } from 'react-router-dom';

export function Header(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const categories = useSelector(state => state.ChangeStoreData.genre);

    const [categoriesList, setCategories] = useState(null);

    async function  handleSearchRequest(event){
        console.log('caled');
        if (event.keyCode === 13){
            navigate('/search',{state:event.target.value});
        }    
    }

    useEffect(() => {
        if(categories === null){
            (async()=>{
                try {
                    let response = await getAnimeCategories();

                    dispatch({
                        type:"changeGenreList",
                        payload: response
                    });

                    setCategories(response)
                    
                } catch (error) {
                    console.log('error getting categories',error);
                }
            })();
        } else {
            setCategories(categories);
        }
    },[]);


    return (
        <div className='flex justify-between w-full'>
                    <div className='w-1/2'>
                       {
                            categoriesList === null ? null :
                            <GenreMenu genreList={categoriesList}/>
                       } 
                    </div>
                    
                    <div className='w-1/2 flex justify-end pr-3'>
                        <input onKeyDown = {(event)=>handleSearchRequest(event)}  className='h- h-3/4 focus bg-slate-600 text-white p-2'  type='text' placeholder='search anime'/>

                    </div>
    </div>
    )
}