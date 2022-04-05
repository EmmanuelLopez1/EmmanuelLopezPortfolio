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

// ICONS
import jsIcon from '../assets/icons/js.png'
import reactIcon from '../assets/icons/react.png'
import jqueryIcon from '../assets/icons/jquery.png'
import githubIcon from '../assets/icons/github.png'
import nodeIcon from '../assets/icons/node-js.png'
import sassIcon from '../assets/icons/sass.png'
import htmlIcon from '../assets/icons/html.png'
import cssIcon from '../assets/icons/css-3.png'
import solidityIcon from '../assets/icons/solidity.png'

export const Home = () => {

    return (
        <div className="Home overflow-hidden bg-dark text-white">
            <main className="">
                <BgVideo url={drinvingCar} styles='justify-center'>
                    <div className="absolute z-10 w-10/12 leading-normal flex items-center flex-col pt-20">
                        <div className="profile_img">

                        </div>
                        <h3 className="text-4xl text-white mt-10 font-neon-2">Hola!</h3>
                        <h2 className="text-5xl text-white font-neon-2">Soy Emmanuel Licea</h2>
                        <h2 className="text-4xl text-white font-neon-2">FrontEnd Developer</h2>
                    </div>
                </BgVideo>
            </main>

            <section className="about_me flex flex-col items-center w-10/12 mx-auto pt-12">
                <div className="">
                    <h2 className="text-3xl font-title text-center font-neon-2">About me</h2>
                    <h3 className="mt-8 text-2xl font-neon-1">Quien soy?</h3>
                    <p className="mt-4 text-xl">
                        Hola y bienvenido, mi nombre es Emmanuel Licea, soy un desarrollador apasionado por la tecnologia, 
                        tengo un ano de experiencia desarrollando aplicaciones FrontEnd,
                        aunque tambien tengo conocimiento en backEnd.
                    </p>
                    <p className='mt-4 text-xl'>
                        Me encanta mi trabajo y siempre que puedo intento aprender nuevas herramientas y mejorar mis conocimientos actuales.
                    </p>
                    <button className="border border-white rounded px-3 py-2 mt-6 shadow-bl-white text-xl m-auto block">
                        Mira mi cv
                    </button>
                </div>
                <div className="pt-12 w-full">
                    <h2 className="mt-8 text-2xl font-neon-1">Skills:</h2>
                    <div className="flex mt-4 justify-between flex-nowrap">
                        <MiniCard img={htmlIcon} imgStyles='block w-16 m-auto'>
                            <p className="text-2xl mt-2 text-center">Html 5</p>
                        </MiniCard>

                        <MiniCard img={cssIcon} imgStyles='block w-16 m-auto'>
                            <p className="text-2xl mt-2 text-center">CSS 3</p>
                        </MiniCard>

                        <MiniCard img={jsIcon} imgStyles='block w-16 m-auto'>
                            <p className="text-2xl mt-2 text-center">Javascript</p>
                        </MiniCard>

                        <MiniCard img={reactIcon} imgStyles='block w-16 m-auto'>
                            <p className="text-2xl mt-2 text-center">React</p>
                        </MiniCard>
                    </div>
                    <div className="flex mt-10 justify-between flex-nowrap">
                        <MiniCard img={nodeIcon} imgStyles='block w-16 m-auto'>
                            <p className="text-2xl mt-2 text-center">Node js</p>
                        </MiniCard>

                        <MiniCard img={githubIcon} imgStyles='block w-16 m-auto bg-white p-2 rounded'>
                            <p className="text-2xl mt-2 text-center">Git y</p>
                            <p className="text-2xl text-center">GitHub</p>
                        </MiniCard>

                        <MiniCard img={solidityIcon} imgStyles='block w-16 m-auto bg-white p-1 rounded'>
                            <p className="text-2xl mt-2 text-center">Solidity</p>
                        </MiniCard>

                        <MiniCard img={jqueryIcon} imgStyles='block w-16 m-auto bg-white p-1 rounded'>
                            <p className="text-2xl mt-2 text-center">Jquery</p>
                        </MiniCard>
                    </div>
                </div>
            </section>

            <section className='projects mt-20 w-10/12 m-auto'>
                <h2 className="text-center text-3xl font-title font-neon-2">Proyectos</h2>
                <div className="">
                    <Card img='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' 
                        tecnologies={['Javascript', 'react js', 'solidity', 'hardhat', 'python', 'node js', 'mocha', 'chai']}>
                        <h4 className="text-2xl">Lil Giblis:</h4>
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