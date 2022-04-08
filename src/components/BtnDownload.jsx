import React from 'react';

export const BtnDownload = ({path})=>{

    const downloadFile = ()=>{
        return window.location.href=`${path}`
    }

    return(
        <input onClick={downloadFile} type="button" value="Descargar cv" className="border border-white rounded px-3 py-2 
                                                        shadow-bl-white text-xl block text-white 
                                                        hover:bg-primary hover:border-primary hover:cursor-pointer
                                                        transition-all duration-500"/>
    )
}