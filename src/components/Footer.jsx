import React from 'react';

// COMPONENTS
import {BtnDownload} from '../components/BtnDownload'

export const Footer = () => {
    return (
        <div className="Footer border-t border-light bg-dark flex items-center p-5 justify-around">
            <p className="text-white text-xl">Emmanuel Lopez Portafolio 2022</p>
            <BtnDownload path=''/>
        </div>
    )
}