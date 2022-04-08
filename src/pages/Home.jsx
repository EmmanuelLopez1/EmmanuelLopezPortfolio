import React, {useState} from "react";
import '../css/Home.css'

//COMPONENTS
import { BgVideo } from "../components/BgVideo"
import { Audio } from "../components/Audio"
import { MiniCard } from "../components/MiniCard"
import { Card } from "../components/Card"
import {BtnDownload} from "../components/BtnDownload"
import {CardInfo} from "../components/CardInfo"
import {Alert} from "../components/Alert"

// SOURCES
import drinvingCar from '../assets/videos/drive-car.mp4';
import audio from '../assets/Audio/resonance.mp3'
import curriculum from '../assets/documents/Emmanuel_Lopez_React_Js_Developer.pdf'

// IMAGES
import softwareInsights from '../assets/img/softwareInsights.io.png'


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
import whatsappIcon from '../assets/icons/whatsapp.png'
import linkedIcon from '../assets/icons/linkedin.png'
import mobileIcon from '../assets/icons/mobile.png'
import mailIcon from '../assets/icons/mail.png'


// IMAGES
import lilGibli from '../assets/img/lilGibli.png'
import lilNessians from '../assets/img/LilNessians.jpg'
import patagoniaRent from '../assets/img/patagonia-rent.JPG'

export const Home = () => {

    return (
        <div className="Home overflow-hidden bg-dark text-white">
            <Alert styles='z-30 top-0 h-screen flex flex-col justify-center bg-primary' active='true'>  
                <h4 className="text-white text-center text-6xl">Atencion !!!</h4>
                <p className="text-white text-2xl mt-10">
                    Este sitio se encuentra actualmente en desarrollo,
                    por ende es muy probable que encuentre bugs, cosas un poco fuera de su sitio y este poco optimizado.
                </p>
                <p className="text-white text-2xl mt-10">
                    Sim embargo me he esforzado por mantener una calidad minima para poder presentarlo, agradezco su comprension.
                </p>
                <h4 className="text-white text-center text-6xl mt-10">Attention !!!</h4>
                <p className="text-white text-2xl mt-10">
                    This site is currently under development, therefore it is very likely that you will find bugs, things a little out of it site and it is not very optimized.
                </p>
                <p className="text-white text-2xl mt-10">
                    My apologies if you are an english speaker, i have not translated this site yet.
                </p>
                <p className="text-white text-2xl mt-10">
                    However, I have tried to maintain a minimum quality to be able to present it, 
                    and the site has a very simple structure, I appreciate your understanding.
                </p>
            </Alert>
            <main className="">
                <BgVideo url={drinvingCar} styles='justify-center'>
                    <div className="absolute z-10 w-10/12 leading-normal flex items-center flex-col pt-20">
                        <div className="profile_img">

                        </div>
                        <h3 className="text-4xl text-white mt-10 font-neon-2">Hola!</h3>
                        <h2 className="text-5xl text-white font-neon-2">Soy Emmanuel Lopez</h2>
                        <h2 className="text-4xl text-white font-neon-2">FrontEnd Developer</h2>
                    </div>
                </BgVideo>
            </main>

            <section id="about-me" className='mt-12'>
                <h2 className="text-3xl font-title text-center font-neon-2 lg:m-auto block">About me</h2>
                <div className="about_me flex flex-col items-center w-10/12 mx-auto 
                                pt-12 lg:flex lg:flex-row lg:justify-between lg:items-start">
                    <div className="lg:w-5/12 mt-8 lg:mt-0">
                        <h3 className="text-2xl font-neon-1">Quien soy?</h3>
                        <p className="mt-4 text-xl">
                            Hola y bienvenido, mi nombre es Emmanuel Lopez, soy un desarrollador apasionado por la tecnologia,
                            tengo un año de experiencia desarrollando aplicaciones FrontEnd,
                            y algunas funcionalidades en el backEnd.
                        </p>
                        <p className='mt-4 text-xl'>
                            Me encanta mi trabajo y siempre que puedo intento aprender nuevas herramientas y mejorar mis conocimientos actuales.
                        </p>
                        <BtnDownload path={curriculum} styles="mt-5"/>
                    </div>
                    <div className="pt-12 w-full lg:w-6/12 xl:w-5/12 mt-8 lg:mt-0 lg:pt-0">
                        <h2 className="text-2xl font-neon-1">Skills:</h2>
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
                </div>
            </section>

            <section id='projects' className='projects mt-20 w-11/12 m-auto lg:w-12/12'>
                <h2 className="text-center text-3xl font-title font-neon-2 ">Proyectos</h2>
                <div className="md:flex flex-wrap gap-4 mt-8">
                    <Card img={lilGibli}
                        tecnologies={['Javascript', 'React js', 'Tailwind', 'Solidity', 'Hardhat', 'Python', 'Node js', 'Mocha', 'Chai', 'Ethers js']}
                        cardStyles='w-72 md:w-64'
                        path='https://lilgibli.com/'>
                        <h4 className="text-2xl text-primary">Lil Giblis:</h4>
                        <p className="text-xl ml-3">
                            Proyecto NFT, tuve la oportunidad de participar como FrontEnd developer,
                            y en parte del codigo backEnd.
                        </p>
                    </Card>
                    <Card img={lilNessians}
                        tecnologies={['Javascript', 'React js', 'Node', 'Solidity', 'Tailwind']}
                        cardStyles='w-72 md:w-64'
                        path="https://lilnessians.com/">
                        <h4 className="text-2xl text-primary">Lil Nessians:</h4>
                        <p className="text-xl ml-3">
                            Proyecto NFT, tuve la oportunidad de participar como FrontEnd developer.
                        </p>
                    </Card>
                    <Card img={softwareInsights}
                        tecnologies={['Html5', 'CSS3', 'Javascript', 'Adobe Ilustrator']}
                        cardStyles='w-72 md:w-64'
                        path="https://emmanuellopez1.github.io/Software-Insights/">
                        <h4 className="text-2xl white">Estado: inconcluso</h4>
                        <h4 className="text-2xl text-primary">Software insigths:</h4>
                        <p className="text-xl ml-3">
                            Landing page, adapte una plantilla preseleccionada a las necesidades de la empresa,
                            disene imagenes svg para usarlas en la aplicacion.
                        </p>
                    </Card>
                    <Card img={patagoniaRent}
                        tecnologies={['Html5', 'CSS3', 'Javascript', 'Bootstrap']}
                        cardStyles='w-72 md:w-64'
                        path="http://patagoniarent.com.ar/">
                        <h4 className="text-2xl text-primary ">Patagonia Rent:</h4>
                        <p className="text-xl ml-3">
                            Landing page, tuve la oportunidad de desarrollar el FrontEnd,
                            optimizar los recursos, asesorar al cliente y
                            llevar la aplicacion a produccion.
                        </p>
                    </Card>
                </div>
            </section>

            <section id="contact" className='contact mt-16 mb-16'>
                <h2 className='text-3xl font-title font-neon-2 text-center'>Contacto</h2>
                <div className="flex flex-col items-center mt-10">
                    <MiniCard >
                        <a href="https://wa.link/b3xbv1" target="_blank" className='text-center text-2xl flex hover:underline decoration-primary'>
                            Enviar mensaje
                            <img src={whatsappIcon} alt="" className='w-8 ml-4' />
                        </a>
                    </MiniCard>
                    <MiniCard styles='mt-5'>
                        <a href="tel:+523411270862" className='text-center text-2xl flex hover:underline decoration-primary'>
                            Llamar
                            <img src={mobileIcon} alt="" className='w-8 ml-4' />
                        </a>
                    </MiniCard>
                    <MiniCard styles='mt-5'>
                        <a href="mailto:maximino33@hotmail.com" className='text-center text-2xl flex hover:underline decoration-primary'>
                            Enviar un mail
                            <img src={mailIcon} alt="" className='w-8 ml-4' />
                        </a>
                    </MiniCard>
                    <MiniCard styles='mt-5'>
                        <a href="https://www.linkedin.com/in/emmanuel-lopez-licea-472835194/" className='text-center text-2xl flex hover:underline 
                        transition-all duration-500 decoration-primary'>
                            Mira mi LinkedIn
                            <img src={linkedIcon} alt="" className='w-8 ml-4' />
                        </a>
                    </MiniCard>
                </div>
            </section>
        </div>
    )
}