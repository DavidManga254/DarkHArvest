//import image from '../assets/splashscreen.jpg';
import * as React from 'react'
import './splash.css'
import splash from '../../assets/splash.jpg'



export function SplashScreen(){
    function removeElement(e){
        e.target.style.display='none'
    }
    return(
        <div onAnimationEnd={(e)=>removeElement(e)} className="splash-screen">
            <div className='app-title'>
                <h1>App name</h1>
            </div>
            <img src={splash}/>
        </div>
    )
}