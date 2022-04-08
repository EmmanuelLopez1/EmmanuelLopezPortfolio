import React from 'react';

export const MiniCard = ({children, img, imgStyles, styles})=>{
    return(
        <div className={styles}>
            <img src={img} alt="" className={`${imgStyles}`}/>
            {children}
        </div>
    )
}