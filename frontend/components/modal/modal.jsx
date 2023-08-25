import React, { useEffect, useState } from 'react';


//modal to givt the user context
export function Modal({modalInfo}){
    return(
        <div className='fixed w-full flex flex-row justify-center bottom-0' >
            <div className='w-fit p-2 bg-grey text-white rounded-full m-5 child-component'>
                <p>{modalInfo}</p>
            </div>
        </div>
    )
}