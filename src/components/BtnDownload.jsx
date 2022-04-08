import React from 'react';
import doc from '../assets/documents/Emmanuel_Lopez_React_Js_Developer.pdf'

export const BtnDownload = ({path})=>{

    const downloadFile = ()=>{
        return window.location.href=`${doc}`
    }

    return(
        <input onClick={downloadFile} type="button" value="Descargar cv" className="border border-white rounded px-3 py-2 
                                                        shadow-bl-white text-xl block text-white 
                                                        hover:bg-primary hover:border-primary hover:cursor-pointer
                                                        transition-all duration-500"/>
    )
}