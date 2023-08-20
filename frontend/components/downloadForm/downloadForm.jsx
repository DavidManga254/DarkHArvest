import * as React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function DownloadForm({animeName}){
    return(
        <div>
            <h2 className='pb=3 font-serif text-white text-lg'>Download {animeName}</h2>

            <form>
                <div className='w-full flex justify-between'>
                    <div>
                        <label>Start</label> : <input type='number'/>
                    </div>
                    
                    <div>
                        <label>Stop</label> : <input type='number'/>
                    </div>
                </div>
                <div>
                    <label>Quality</label><br></br>
                    <select id="dropdown">
                        <option value="360">360p</option>
                        <option value="480">480p</option>
                        <option value="720">720p</option>
                        <option value="1080">1080p</option>
                    </select>
                </div>
                <div>
                    <label>Language</label><br></br>
                    <select id="dropdown">
                        <option value="360">SUB</option>
                        <option value="480">DUB</option>
                    </select>
                </div>
                <div>
                    <button>Download</button>
                </div>
            </form>
        </div>
    )
}