import React from "react";
import '../css/Home.css'

//COMPONENTS
import { BgVideo } from "../components/BgVideo"
import { Audio } from "../components/Audio"
import {MiniCard} from "../components/MiniCard"
import {Card} from "../components/Card"
// SOURCES
import drinvingCar from '../assets/videos/drive-car.mp4';
import audio from '../assets/Audio/resonance.mp3'
import profileImg from '../assets/img/profile.jpg'
import jsIcon from '../assets/icons/icons8-javascript-96.svg'

export const Home = () => {

    return (
        <div className="Home overflow-hidden">
            <main className="">
                <BgVideo url={drinvingCar} styles='justify-center'>
                    <div className="absolute z-10 w-10/12 leading-normal flex items-center flex-col pt-20">
                        <div className="profile_img">

                        </div>
                        <h3 className="text-4xl text-white mt-10">Hola!</h3>
                        <h2 className="text-5xl text-white">Soy Emmanuel Licea</h2>
                        <h2 className="text-4xl text-white">FrontEnd Developer</h2>
                    </div>
                </BgVideo>
            </main>

            <section className="about_me flex flex-col items-center w-10/12 mx-auto pt-12">
                <div className="">
                    <h2>About me</h2>
                    <h3>Quien soy?</h3>
                    <p>
                        Hola y bienvenido, mi nombre es Emmanuel Licea, soy un desarrollador apasionado por la tecnologia, 
                        tengo un ano de experiencia desarrollando aplicaciones FrontEnd,
                        aunque tambien tengo conocimiento en backEnd.
                    </p>
                    <p>
                        Me encanta mi trabajo y siempre que puedo intento aprender nuevas herramientas y mejorar mis conocimientos actuales.
                    </p>
                    <button className="">
                        Mira mi cv
                    </button>
                </div>
                <div className="pt-12">
                    <h2 className="text-center">Skills</h2>
                    <div className="flex">
                        <MiniCard img={jsIcon}>
                            Javascript
                        </MiniCard>

                        <MiniCard img={jsIcon}>
                            Javascript
                        </MiniCard>
                    </div>
                </div>
            </section>

            <section className='projects mt-20 w-10/12 m-auto'>
                <h2 className="text-center">Proyectos</h2>
                <div className="    ">
                    <Card img='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' tecnologies={['Javascript', 'react', 'node', 'solidity']}>
                        Lil Nessians
                    </Card>
                    <Card img='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' tecnologies={['Javascript', 'react', 'node', 'solidity']}>
                        Lil Giblis
                    </Card>
                    <Card img='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' tecnologies={['Javascript', 'react', 'node', 'solidity']}>
                        Patagonia Rent
                    </Card>
                </div>
            </section>

            <section className='Hobbies'>

            </section>

            <section className='contact'>
                <h2>Contacto</h2>
                <div className="">
                    <MiniCard >
                        <a href="">Whatsapp</a>
                    </MiniCard>
                    <MiniCard >
                        <a href="">Phone</a>
                    </MiniCard>
                    <MiniCard >
                        <a href="">Correo</a>
                    </MiniCard>
                    <MiniCard >
                        <a href="">LinkedIn</a>
                    </MiniCard>
                </div>
            </section>  
        </div>
    )
}