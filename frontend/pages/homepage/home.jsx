import { SplashScreen } from '../../components/splashscreen/splashpage.jsx'
import * as React from 'react';
import bleach from '../../assets/bleach.jpg'
import aot from '../../assets/aot.jpg';
import op from '../../assets/op.jpg';
import death from '../../assets/dt.jpg';
import kengan from '../../assets/ka.jpg';
import demon from '../../assets/ds.jpg';
//simport { ipcRenderer } from 'electron';
import { searcher } from '../../../src/renderer.js';
import { Navigate, useNavigate } from 'react-router-dom';





//homepage
export function Homepage(){
    //navigate
    const navigate = useNavigate();

    //function to take search request
    async function  handleSearchRequest(event){
        if (event.keyCode === 13){
            let results;
            //anime name
            let request = event.target.value;
            results= await window.connect.searchAnime(request);
            

            navigate('/search',{state:{
                name:request,
                list:results
            }});
        }    
    }
    return(
        <div className="home-page bg-blue-500">
            {/* <SplashScreen/> */}
            <section className='home-section'>
                <div className='search-bar'>
                    <input type='text' onKeyDown={(event)=>handleSearchRequest(event)} placeholder='Search Anime'/>
                </div>
                <h2>Recommended</h2>
                <section className='recommended'>

                    <div className='recommend-anime'>
                        <div className='image-section'>
                            <img src={aot}/>
                        </div>
                        <h3>Attack on titan final season</h3>
                    </div>

                    <div className='recommend-anime'>
                        
                        
                        <h3>One Piece</h3>
                        <div className='image-section'>
                            <img src={op}/>
                        </div>
                    </div>

                    <div className='recommend-anime'>
                        
                        <h3>Bleach</h3>
                        <div className='image-section'>
                            <img src={bleach}/>
                        </div>
                    </div>

                    <div className='recommend-anime'>
                        
                        <h3>Demon Slayer</h3>
                        <div className='image-section'>
                            <img src={demon}/>
                        </div>
                    </div>

                    <div className='recommend-anime'>
                        
                        <h3>Death Note</h3>
                        <div className='image-section'>
                            <img src={death}/>
                        </div>
                    </div>

                    <div className='recommend-anime'>
                        
                        <h3>Kengan Ashura</h3>
                        <div className='image-section'>
                            <img src={kengan}/>
                        </div>
                    </div>


                </section>
            </section>
        </div>
    )
}