import React from 'react';

export const MiniCard = ({children, img})=>{
    return(
        <div className="">
            <img src={img} alt="" className=""/>
            {children}
        </div>
    )
}