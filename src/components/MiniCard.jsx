import React from 'react';

export const MiniCard = ({children, img, imgStyles})=>{
    return(
        <div className="">
            <img src={img} alt="" className={`${imgStyles}`}/>
            {children}
        </div>
    )
}