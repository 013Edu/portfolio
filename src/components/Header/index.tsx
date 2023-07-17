"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import "./styles.css"

import { Link, animateScroll as scroll } from 'react-scroll';

import Mac from "../../../public/assets/mac.jpg"
import Phone from "../../../public/assets/phone.jpg"
import Logo from "../../../public/assets/logo.png"

import AOS from 'aos';
import 'aos/dist/aos.css';


import { FaYoutube, FaInstagram, FaLinkedinIn, FaPhone, FaTimes, FaBars } from "react-icons/fa"

const Header: React.FC = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    const menuClass = `ml-5 transition-all duration-300 ${isMenuOpen ? 'opacity-100 max-h-[200px]' : 'opacity-0 max-h-0'
        }`;

    return (
        <header id='home' className='lg:pt-6 min-[375px]:pt-0'>
            <div className="lg:hidden bg-purple-600 max-[1300px]:flex min-[375px] py-3">
                <button onClick={handleMenuToggle}>
                    {isMenuOpen ? (
                        <FaTimes className="text-2xl ml-8" />
                    ) : (
                        <div className="flex gap-3">
                            <FaBars className="text-2xl ml-8" />
                            <h2>Menu</h2>
                        </div>
                    )}
                </button>
                <div className={menuClass}>
                    <ul className="flex gap-3 mt-3 flex-col">
                        <li>
                            <Link
                                className="hover:text-gray-400 text-xs cursor-pointer"
                                to="about-me"
                                smooth={true}
                                duration={500}
                                offset={-100}
                            >
                                QUEM SOU
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-gray-400 text-xs cursor-pointer"
                                to="what-do-i-do"
                                smooth={true}
                                duration={500}
                                offset={-100}
                            >
                                O QUE FAÇO
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-gray-400 text-xs cursor-pointer"
                                to="portfolio"
                                smooth={true}
                                duration={500}
                                offset={-100}
                            >
                                PORTFÓLIO
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-gray-400 text-xs cursor-pointer"
                                to="tell-me"
                                smooth={true}
                                duration={500}
                                offset={-100}
                            >
                                FALE CONOSCO
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='hidden sm:block '>
                <div className='flex justify-around max-[1300px]:hidden'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-slate-50 p-1 rounded hover:cursor-pointer hover:bg-purple-500 hover:text-white'>
                            <a
                                href="https://www.youtube.com/channel/UCNEcjY1seAsF35ymQ4IVtCA"
                                target='_blank'
                            >
                                <FaYoutube
                                    size={25}
                                    className='text-black transition-colors duration-1000 hover:text-white'
                                />
                            </a>
                        </div>
                        <div className='bg-slate-50 p-1 rounded hover:cursor-pointer hover:bg-purple-500 hover:text-white'>
                            <a
                                href="https://instagram.com/eduardoogoncalvess_/"
                                target='_blank'
                            >
                                <FaInstagram
                                    size={25}
                                    className='text-black transition-colors duration-1000 hover:text-white'
                                />
                            </a>
                        </div>
                        <div className='bg-slate-50 p-1 rounded hover:cursor-pointer hover:bg-purple-500 hover:text-white'>
                            <a
                                href="https://www.linkedin.com/in/eduardo-gon%C3%A7alves1/"
                                target='_blank'
                            >
                                <FaLinkedinIn
                                    size={25}
                                    className='text-black transition-colors duration-1000 hover:text-white'
                                />
                            </a>
                        </div>
                    </div>
                    <div className='text-center'>
                        <h3 className='text-3xl'>EDUARDO GONÇALVES</h3>
                        <h3>FREELANCE•DEVELOPER</h3>
                    </div>
                    <div className='flex items-center gap-3 -mr-16'>
                        <div className='bg-slate-50 p-1 rounded'>
                            <FaPhone
                                size={25}
                                color='#000'
                            />
                        </div>
                        <h3 className='text-xs'>
                            TELEFONE DE <br /> CONTATO
                        </h3>
                        <h2 className='text-3xl'>
                            (83) 98617-5383
                        </h2>
                    </div>

                    <div className='absolute mt-36 mr-11 -z-30 top-0 opacity-0 aos-init'
                        data-aos='fade-left'
                        data-aos-delay='1000'
                        data-aos-duration='1000'
                    >
                        <Image
                            src={Logo}
                            alt='Logo escrito Edu Dev'
                            quality={100}
                            width={220}
                        />
                    </div>
                </div>

            </div>
            <div>
                <nav className='mt-40 flex justify-around lg:flex max-[1300px]:mx-20 min-[320px]:hidden'>
                    <div className='flex gap-8'>
                        <Link
                            className='text-2xl relative hover:cursor-pointer headerzin'
                            to="about-me"
                            smooth={true}
                            duration={500}
                            offset={-100}
                        >
                            QUEM SOU
                            <span className='line'></span>
                        </Link>
                        <Link
                            className='text-2xl relative hover:cursor-pointer headerzin'
                            to="what-do-i-do"
                            smooth={true}
                            duration={500}
                            offset={-100}
                        >
                            O QUE FAÇO
                            <span className='line'></span>
                        </Link>
                    </div>
                    <div className='flex gap-8'>
                        <Link
                            className='text-2xl relative hover:cursor-pointer headerzin ml-64'
                            to="portfolio"
                            smooth={true}
                            duration={500}
                            offset={-100}
                        >
                            PORTFÓLIO
                            <span className='line'></span>
                        </Link>
                        <Link
                            className='text-2xl relative hover:cursor-pointer headerzin'
                            to="tell-me"
                            smooth={true}
                            duration={500}
                            offset={-100}
                        >
                            FALE CONOSCO
                            <span className='line'></span>
                        </Link>
                    </div>
                </nav>

            </div>

            <div className='mt-64 flex justify-center lg:mt-64'>
                <h1
                    className='lg:text-5xl lg:mt-48 text-center opacity-0 aos-init sm:mt-80 max-[1025px]:mt-96 max-[600px]:mt-96 min-[375px]:text-3xl min-[375px]:absolute min-[375px]:mt-64'
                    data-aos='fade-left'
                    data-aos-delay='600'
                    data-aos-duration='600'
                >
                    Criando produtos <span className='text-purple-500'>&</span> <br />
                    gerando experiências digitais.
                </h1>
                <div
                    className=' mac absolute z-20 opacity-0 lg:-mt-32 sm:-mt-2 aos-init max-[1025px]:mt-48 min-[600px]:-mt-20 max-[590px]:-mt-32 min-[375px]:mt-16'
                    data-aos='fade-right'
                    data-aos-delay='600'
                    data-aos-duration='600'
                >
                    <Image
                        src={Mac}
                        alt='Imagem de um Macbook'
                        quality={100}
                        width={650}
                    />
                </div>
                <div
                    className='absolute z-10  lg:-mt-96 opacity-0 aos-init sm:-mt-52 max-[1025px]:mt-48  max-[600px]:-mt-60 max-[375px]:-mt-32 max-[375px]:mr-10'
                    data-aos='fade-left'
                    data-aos-delay='600'
                    data-aos-duration='600'
                >
                    <Image
                        src={Phone}
                        alt='Imagem de uma mão segurando um celular'
                        quality={100}
                        className='lg:w-96 min-[375px]:w-72'
                    />
                </div>
            </div>


        </header>
    )
}

export default Header;