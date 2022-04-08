import React, { useState } from 'react';

export const Alert = ({ children, active, styles }) => {
    const [close, setClose] = useState(active)

    const closeAlert = ()=>{
        console.log('closing');
        setClose(false)
    }

    return (
        <>
            {close &&
                <div className={`${styles} w-full absolute p-10`}>
                    {children}
                    <button className="text-white relative top-0 right-0 text-5xl hover:text-dark mt-10" onClick={closeAlert}>
                        X
                    </button>
                </div>
            }
        </>
    )
}