import React from "react";
import '../css/Home.css'

//COMPONENTS
import { BgVideo } from "../components/BgVideo"
import { Audio } from "../components/Audio"
// SOURCES
import drinvingCar from '../assets/videos/drive-car.mp4';
import audio from '../assets/Audio/resonance.mp3'
import profileImg from '../assets/img/profile.jpg'

export const Home = () => {

    return (
        <div className="Home overflow-hidden">
            <main className="">
                <BgVideo url={drinvingCar} styles='justify-center pt-20'>
                    <div className="absolute z-10 w-10/12 leading-normal flex items-center flex-col">
                        <div className="profile_img">

                        </div>
                        <h3 className="text-4xl text-white mt-10">Hola!</h3>
                        <h2 className="text-5xl text-white">Soy Emmanuel Licea</h2>
                        <h2 className="text-4xl text-white">FrontEnd Developer</h2>
                    </div>
                </BgVideo>
            </main>

            <section className="about_me">

            </section>
        </div>
    )
}