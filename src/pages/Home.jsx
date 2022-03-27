import React from "react";
import '../css/Home.css'

//COMPONENTS
import {BgVideo} from '../components/BgVideo';

// SOURCES
import drinvingCar from '../assets/videos/drive-car.mp4';

export const Home = ()=>{
    return(
        <div className="Home overflow-hidden">
            <div className="about_me relative w-full overflow-hidden">
                <BgVideo url={drinvingCar} styles='about-me-player z-0'/>
            </div>
        </div>
    )
}