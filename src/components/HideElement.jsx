import React, { useState } from 'react';


export const HideElement = ({ children, styles, closeBtn }) => {
    const [hide, setHide] = useState('block')

    const hideElement = () => {
        setHide('hidden')
    }
    return (
        <div className={hide}>
                <div className={`HideElement absolute ${styles}`}>
                    <div className="">
                        {closeBtn &&
                            <p className="text-white text-center relative text-5xl hover:text-dark hover:cursor-pointer" onClick={hideElement}>X</p>
                        }
                        {children}
                    </div>
                </div>
        </div>
    )
}