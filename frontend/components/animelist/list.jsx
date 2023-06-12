import * as React from 'react';
import { useNavigate } from 'react-router-dom';


export function AnimeList({list}){
    //navigate
    const navigate = useNavigate();
    
    async function sendRequest(link){
        let details = await window.connect.getDetails(link);

        navigate('/download',{state:details});
    }
    return(
        <div className="anime-list">
            
           {
            list.map((element,index)=>{
                return(
                    <div key={index} onClick={()=>sendRequest(element)} className="anime">
                        <section className="anime-name">
                            <h2>{element.name}</h2>
                        </section>
                        <section className="anime-image">
                            <img src={element.cover}/>
                        </section>
                    </div>
                )
            })
           }
        </div>
    )
}