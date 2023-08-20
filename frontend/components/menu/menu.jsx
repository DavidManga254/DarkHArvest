import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export function GenreMenu({genreList}){

    const navigate = useNavigate();

    function navigateToCategory(category){
        navigate('/categories',{
            state : category
        })
    }

    return (
        <div>
            <Menu menuButton={<MenuButton> <div className='border-solid border border-white p-1 text-white' > Genres <ArrowDropDownIcon/> </div> </MenuButton>} transition>
                {
                    genreList.map((genre) => <MenuItem onClick={() => navigateToCategory(genre)}>{genre}</MenuItem>)
                }
            </Menu>
        </div>
    )

}