import React from 'react';
import isMobile from 'is-mobile';

// COMPONENTS
import { MobileMenu } from './MobileMenu'

export const Header = () => {
    const menuList = ['Home', 'About me', 'Experience', 'My work', 'Contact']
    return (
        <div className="Header">
            <div className="p-3 flex bg-dark relative justify-between items-center border-b-2 border-light">
                <h3 className="logo text-white text-3xl w-6/12">
                    Emmanuel Lopez Portfolio
                </h3>

                {/* HIDE MOBILE MENU WHEN SCREEN    SIZE IS MD */}
                <MobileMenu styles='lg:hidden' menuList={menuList} />


                <ul className="hidden lg:block">
                    {
                        menuList.map(el=>{
                            return <li key={el} className="text-white inline-block px-4 py-2 text-lg hover:cursor-pointer hover:bg-light rounded-sm">{el}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}