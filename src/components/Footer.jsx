import React from 'react';

// COMPONENTS
import {BtnDownload} from '../components/BtnDownload'

// ASSETS
import curriculum from '../assets/documents/Emmanuel_Lopez_React_Js_Developer.pdf'


export const Footer = () => {
    return (
        <div className="Footer border-t border-light bg-dark flex items-center p-5 justify-around">
            <p className="text-white text-xl">Emmanuel Lopez Portafolio 2022</p>
            <BtnDownload path={curriculum}/>
        </div>
    )
}