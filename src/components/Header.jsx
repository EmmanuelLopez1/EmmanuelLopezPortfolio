import React from 'react';
import '../css/Header.scss';

// COMPONENTS
import { MobileMenu } from './MobileMenu'

export const Header = () => {
    const menuList = ['Home', 'About me', 'Experience', 'My work', 'Contact']
    return (
        <div className="Header">
            <div className="p-4 flex bg-dark relative justify-between items-center border-b-2 border-light">
                <h3 className="font-title text-white text-3xl w-6/12 racking-widest">
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