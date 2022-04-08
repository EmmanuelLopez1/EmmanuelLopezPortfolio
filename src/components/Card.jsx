import React from 'react';

export const Card = ({children, img, tecnologies, cardStyles, path})=>{
    return(
        <div className={`${cardStyles} card m-auto mt-8 rounded-lg 
        overflow-hidden shadow-bl-5-primary`}>
            <img src={img} alt="" className="w-full max-h-72"/>
            <div className="card_info p-5">
                {children}
                <h4 className="mt-3 text-2xl text-primary">tecnologias usadas:</h4>
                <ul className="tecnologies flex flex-wrap">
                    {tecnologies && tecnologies.map(el=>{
                        return <li className="text-white px-3 text-xl">{el}</li>
                    })}
                </ul>
                
                <a href={path} target="_blank" className="border border-primary rounded w-full block 
                            mt-4 p-2 text-xl text-center hover:bg-primary 
                            hover:cursor-pointer ease-in duration-300 ">
                    mirar proyecto
                </a>
            </div>
        </div>
    )
}