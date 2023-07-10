"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import "./styles.css"

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
        <header className='lg:pt-6 min-[375px]:pt-0'>
            <div className="sm:hidden bg-purple-600 min-[375px] py-3">
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
                            <a href="#" className="hover:text-gray-400 text-xs">
                                QUEM SOU
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400 text-xs">
                                O QUE FAÇO
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400 text-xs">
                                PORTFÓLIO
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400 text-xs">
                                FALE CONOSCO
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='hidden sm:block'>
                <div className='flex justify-around'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-slate-50 p-1 rounded hover:cursor-pointer hover:bg-purple-500 hover:text-white'>
                            <FaYoutube
                                size={25}
                                className='text-black transition-colors duration-1000 hover:text-white'
                            />
                        </div>
                        <div className='bg-slate-50 p-1 rounded hover:cursor-pointer hover:bg-purple-500 hover:text-white'>
                            <FaInstagram
                                size={25}
                                className='text-black transition-colors duration-1000 hover:text-white'
                            />
                        </div>
                        <div className='bg-slate-50 p-1 rounded hover:cursor-pointer hover:bg-purple-500 hover:text-white'>
                            <FaLinkedinIn
                                size={25}
                                className='text-black transition-colors duration-1000 hover:text-white'
                            />
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
                <nav className='mt-40 flex justify-around lg:flex min-[320px]:hidden'>
                    <div className='flex gap-8'>
                        <h2 className='text-2xl relative hover:cursor-pointer'>
                            QUEM SOU
                            <span className='line'></span>
                        </h2>
                        <h2 className='text-2xl relative hover:cursor-pointer'>
                            O QUE FAÇO
                            <span className='line'></span>
                        </h2>
                    </div>
                    <div className='flex gap-8'>
                        <h2 className='text-2xl relative hover:cursor-pointer'>
                            PORTFÓLIO
                            <span className='line'></span>
                        </h2>
                        <h2 className='text-2xl relative hover:cursor-pointer'>
                            FALE CONOSCO
                            <span className='line'></span>
                        </h2>
                    </div>
                </nav>

            </div>

            <div className='mt-64 flex justify-center lg:mt-64 '>
                <h1
                    className='lg:text-5xl lg:mt-48 text-center opacity-0 aos-init max-[1025px]:mt-96 min-[35px]:text-3xl min-[375px]:absolute min-[375px]:mt-64'
                    data-aos='fade-left'
                    data-aos-delay='600'
                    data-aos-duration='600'
                >
                    Criando produtos <span className='text-purple-500'>&</span> <br />
                    gerando experiências digitais.
                </h1>
                <div
                    className='absolute z-20 opacity-0 lg:top-80 aos-init max-[1025px]:mt-48 min-[375px]:mt-16'
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
                    className='absolute z-10  lg:-mt-96 opacity-0 aos-init max-[1025px]:mt-48 max-[375px]:-mt-32 max-[375px]:mr-10'
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