import React from 'react';

export const CardInfo = ({children, styles})=>{
    return(
        <div className={`CardInfo relative ${styles}`}>
            {children}
        </div>
    )
}