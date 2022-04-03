import React from 'react';

export const Card = ({children, img, tecnologies})=>{
    return(
        <div className="card border w-9/12 m-auto mt-8 border-2 rounded-lg overflow-hidden">
            <img src={img} alt="" className="w-full"/>
            <div className="card_info p-5">
                {children}
                <div className="tecnologies flex flex-wrap justify-around my-5">
                    {tecnologies && tecnologies.map(el=>{
                        return <p className="border bg-light text-white p-1 px-3 my-2">{el}</p>
                    })}
                </div>
                <a className="border border-primary p-1 mt-2 w-full">
                    mirar proyecto
                </a>
            </div>
        </div>
    )
}