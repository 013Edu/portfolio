"use client"
import React, { useState } from 'react';

import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

import "./styles.css"

const SectionPortfolio: React.FC = () => {

    const [translateValue, setTranslateValue] = useState(0);

    const slideLeft = () => {
        if (translateValue >= -1050) {
            setTranslateValue((prevValue) => prevValue - 210);
        }
    };

    const slideRight = () => {
        if (translateValue < 0) {
            setTranslateValue((prevValue) => prevValue + 210);
        }
    };


    return (
        <div id='portfolio' className='bg-white py-20 flex max-[600px]:flex-col max-[375px]:flex-col'>
            <div className='bg-purple-900 w-96 px-10 py-20 flex flex-col justify-center gap-6 h-96 max-[600px]:w-full'>
                <h1 className='text-white text-5xl'>Portfólio</h1>
                <h2 className='text-gray-50 font-mono'>CONHEÇA AS SOLUÇÕES<br />
                    CRIADAS E DESENVOLVIDAS<br />
                    PARA CLIENTES<br />
                    DO MUNDO TODO.
                </h2>
            </div>
            <div className="slider-c">
                <div
                    className="slider-c"
                    style={{ transform: `translateX(${translateValue}px)` }}
                >
                    <div className='flex flex-c'>
                        <div className="slider-item">
                            <div className="container">
                                <div className="bg">
                                    <a href='https://github.com/013Edu/aluroni' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Aluroni</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Typescript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>React</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>CSS</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg2">
                                    <a href='https://github.com/013Edu/tlou' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>The Last of Us</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Typescript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>React</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Taiwlind</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg3">
                                    <a href='https://github.com/013Edu/wallet-app' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Wallet App</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Typescript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>React Native</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Styled Components</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg4">
                                    <a href='https://github.com/013Edu/nubankApp' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Nubank App</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Javscript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>React Native</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Styled Components</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg5">
                                    <a href='https://github.com/013Edu/spotify-clone' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Spotify Clone</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Typescript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Next Js</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Tailwind</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg6">
                                    <a href='https://github.com/013Edu/memo-teca' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Memoteca</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Typescript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>React</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Styled Components</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg7">
                                    <a href='https://github.com/013Edu/nlw-setup' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Habits</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Javascript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>HTML</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>CSS</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg8">
                                    <a href='https://github.com/013Edu/PokeNext' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Poke Next</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Next Js</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Typescript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>SASS</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg">
                                    <a href='https://github.com/013Edu/aluroni' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Aluroni</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Typescript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>React</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>CSS</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg2">
                                    <a href='https://github.com/013Edu/tlou' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>The Last of Us</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Typescript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>React</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Taiwlind</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg3">
                                    <a href='https://github.com/013Edu/wallet-app' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Wallet App</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Typescript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>React Native</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Styled Components</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg4">
                                    <a href='https://github.com/013Edu/nubankApp' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Nubank App</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Javscript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>React Native</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Styled Components</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg5">
                                    <a href='https://github.com/013Edu/spotify-clone' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Spotify Clone</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Typescript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Next Js</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Tailwind</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg6">
                                    <a href='https://github.com/013Edu/memo-teca' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Memoteca</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Typescript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>React</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Styled Components</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg7">
                                    <a href='https://github.com/013Edu/nlw-setup' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Habits</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Javascript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>HTML</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>CSS</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg8">
                                    <a href='https://github.com/013Edu/PokeNext' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Poke Next</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Next Js</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Typescript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>SASS</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg">
                                    <a href='https://github.com/013Edu/aluroni' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Aluroni</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Typescript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>React</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>CSS</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg2">
                                    <a href='https://github.com/013Edu/tlou' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>The Last of Us</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Typescript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>React</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Taiwlind</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg3">
                                    <a href='https://github.com/013Edu/wallet-app' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Wallet App</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Typescript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>React Native</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Styled Components</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg4">
                                    <a href='https://github.com/013Edu/nubankApp' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Nubank App</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Javscript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>React Native</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Styled Components</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg5">
                                    <a href='https://github.com/013Edu/spotify-clone' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Spotify Clone</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Typescript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Next Js</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Tailwind</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg6">
                                    <a href='https://github.com/013Edu/memo-teca' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Memoteca</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Typescript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>React</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Styled Components</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg7">
                                    <a href='https://github.com/013Edu/nlw-setup' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Habits</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Javascript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>HTML</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>CSS</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <div className="bg bg8">
                                    <a href='https://github.com/013Edu/PokeNext' target='_blank' className="overlay">
                                        <h2 className='mt-60 text-2xl font-bold'>Poke Next</h2>
                                        <div className='text-white my-2 flex gap-2'>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Next Js</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Typescript</button>
                                            <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>SASS</button>
                                        </div>
                                        <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                                    </a>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
                <button className="slider-button bg-purple-700 p-2 rounded-2xl" onClick={slideLeft}>
                    <FiChevronLeft
                        color='#fff'
                    />
                </button>
                <button className="slider-button bg-purple-700 p-2 rounded-2xl ml-2" onClick={slideRight}>
                    <FiChevronRight
                        color='#fff'
                    />
                </button>
            </div>
            <div className='bg-black w-96 px-20 pl-36 py-20 flex flex-col justify-center gap-6 h-96 max-[600px]:w-full max-[375px]:px-10'>
                <h1 className='text-white text-5xl'>Portfólio</h1>
                <h2 className='text-gray-50 font-mono'>CONHEÇA AS SOLUÇÕES
                    DIGITAIS<br />
                    PARA MELHORAR SEUS NEGÓCIOS<br />
                    E IMPULSIONAR SUA MARCA.
                </h2>
            </div>
        </div>
    )
}
export default SectionPortfolio;