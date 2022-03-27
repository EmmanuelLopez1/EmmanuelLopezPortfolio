import React from 'react';
import isMobile from 'is-mobile';

// COMPONENTS
import {MobileMenu} from './MobileMenu'

export const Header = ()=>{
    return(
        <div className="Header">
            <div className="p-3 flex bg-dark relative justify-between align-center">
                <h3 className="logo text-white text-3xl w-6/12">
                    Emmanuel Lopez Portfolio
                </h3>
                <MobileMenu menuList={['Home', 'About me', 'Experience', 'My work', 'Contact']}/>
            </div>
        </div>
    )
}