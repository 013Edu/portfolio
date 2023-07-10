import Image from 'next/image';
import React from 'react';

import Me from "../../../public/assets/eu.jpeg"

import { FaCode, FaRetweet, FaUikit } from "react-icons/fa"

import "./styles.css"

import Carousel from '../Carrousel';

const AboutMe: React.FC = () => {

    const items = [
        { image: "/assets/react.png", text: 'React' },
        { image: '/assets/javascript.png', text: 'Javascript' },
        { image: '/assets/react.png', text: 'React Native' },
        { image: '/assets/meu.png', text: 'Next Js' },
        { image: '/assets/styled.png', text: 'Styled Components' },
        { image: '/assets/tailwind.png', text: 'Tailwind CSS' },
        { image: '/assets/meuu.jpg', text: 'Figma' },
        { image: '/assets/prototi.webp', text: 'Prototipagem' },

    ];


    return (
        <div>
            <div className='mt-custom flex items-center justify-center gap-20 max-[1540px]:flex-col max-[375px]:flex-col max-[375px]:px-5'>
                <div className='px-10'>
                    <div className='w-96 relative max-[375px]:w-72'>
                        <h3 className='my-8 text-purple-600 text-xl font-mono tracking-widest'>CITAÇÃO</h3>
                        <h2 className='text-8xl absolute top-10 -left-9 text-purple-500'>“</h2>
                        <h2 className='italic ml-2'>
                            Existem duas maneiras de construir um projeto de software. Uma é fazê-lo tão simples que obvio não há falhas. A outra é fazê-lo tão complicado que não existem falhas óbvias.
                        </h2>
                        <h2 className='text-8xl absolute bottom-16 left-96 text-purple-500 max-[375px]:left-64'>”</h2>
                        <h4 className='mt-6 text-end tracking-widest text-purple-600'>
                            - C.A.R. HOAR
                        </h4>
                        <div>
                            <h2 className='text-purple-600 mt-5 text-xl font-mono tracking-widest'>OCUPAÇÕES ATUAIS</h2>
                            <h3 className='mt-2'>Mobile Engineer at Agile</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative inline-block rounded-full borda-animada">
                        <Image
                            src={Me}
                            alt="Foto de Eduardo Gonçalves"
                            quality={100}
                            width={300}
                            height={300}
                            className="rounded-full"
                        />
                    </div>
                </div>
                <div className='-mr-52 max-[375px]:max-w-sm max-[375px]:-mr-5'>
                    <h2 className='text-8xl text-purple-600'>Olá,</h2>
                    <h3 className='mt-2'>
                        eu sou Eduardo Gonçalves, profissional graduando em Análise e Desenvolvimento<br /> de Sistemas, especializado em desenvolvimento Front-end e aplicações voltadas para a<br /> interface do usuário. Meu objetivo é encontrar as melhores soluções criativas<br /> para as marcas dos meus clientes, cuidando de cada detalhe e buscando sempre<br /> um impacto positivo na experiência do usuário.
                    </h3>
                    <h3>
                        Se você procura um profissional para colaborar em projetos de Front-end, estou<br /> sempre disponível para discutir possibilidades. Basta entrar em contato comigo<br /> e conversarmos sobre como posso ajudar a impulsionar o sucesso de seu projeto.
                    </h3>
                </div>
            </div>
            <div className='my-20 flex justify-center'>
                <h2 className='text-xl tracking-widest font-mono'>MINHAS SKILLS E POWER UP’S</h2>
            </div>
            <div className='relative'>
                <div className='absolute w-full -top-10'>
                    <Carousel items={items} />
                </div>
            </div>
            <div className="slider-container rounded-2xl -mt-40 absolute top-96 -right-96 ml-custom2">
                <div className="slider">
                    <div>
                        <div className=" slide bg-white p-6 rounded-2xl">
                            <h2 className='text-gray-600 absolute -mt-40 text-sm font-bold'>DIFERENCIAIS</h2>
                            <div className='flex items-center gap-10'>
                                <FaCode
                                    fontSize={90}
                                    color='purple'
                                />
                                <div>
                                    <h2 className='text-black'>Clean Code</h2>
                                    <h3 className='text-black text-sm'>Tenho como minha principal diretriz durante o<br /> desenvolvimento a qualidade do código seguindo as<br /> melhores práticas do mercado. </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=" slide bg-white p-6 rounded-2xl">
                            <h2 className='text-gray-600 absolute -mt-40 text-sm font-bold'>DIFERENCIAIS</h2>
                            <div className='flex items-center gap-10'>
                                <FaUikit
                                    fontSize={90}
                                    color='purple'
                                />
                                <div>
                                    <h2 className='text-black'>Interfaces de alta fidelidade</h2>
                                    <h3 className='text-black text-sm'>Trabalho com a implementação fiel de interfaces presando pela melhor experiência do usuário para atender as expectativas de cada projeto. </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=" slide bg-white p-6 ">
                            <h2 className='text-gray-600 absolute -mt-40 text-sm font-bold'>DIFERENCIAIS</h2>
                            <div className='flex items-center gap-10'>
                                <FaRetweet
                                    fontSize={190}
                                    color='purple'
                                />
                                <div>
                                    <h2 className='text-black'>Metodologias Ágeis</h2>
                                    <h3 className='text-black text-sm'>Utilizo metodologias e planejamentos otimizados que dinamizam o fluxo de produção. Através de feedback e interações constantes, garantindo a agilidade e eficiência do processo. </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=" slide bg-white p-6 rounded-2xl">
                            <h2 className='text-gray-600 absolute -mt-40 text-sm font-bold'>DIFERENCIAIS</h2>
                            <div className='flex items-center gap-10'>
                                <FaCode
                                    fontSize={90}
                                    color='purple'
                                />
                                <div>
                                    <h2 className='text-black'>Clean Code</h2>
                                    <h3 className='text-black text-sm'>Tenho como minha principal diretriz durante o<br /> desenvolvimento a qualidade do código seguindo as<br /> melhores práticas do mercado. </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=" slide bg-white p-6 rounded-2xl">
                            <h2 className='text-gray-600 absolute -mt-40 text-sm font-bold'>DIFERENCIAIS</h2>
                            <div className='flex items-center gap-10'>
                                <FaUikit
                                    fontSize={90}
                                    color='purple'
                                />
                                <div>
                                    <h2 className='text-black'>Interfaces de alta fidelidade</h2>
                                    <h3 className='text-black text-sm'>Trabalho com a implementação fiel de interfaces presando pela melhor experiência do usuário para atender as expectativas de cada projeto. </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=" slide bg-white p-6 ">
                            <h2 className='text-gray-600 absolute -mt-40 text-sm font-bold'>DIFERENCIAIS</h2>
                            <div className='flex items-center gap-10'>
                                <FaRetweet
                                    fontSize={130}
                                    color='purple'
                                />
                                <div>
                                    <h2 className='text-black'>Metodologias Ágeis</h2>
                                    <h3 className='text-black text-sm'>Utilizo metodologias e planejamentos otimizados que dinamizam o fluxo de produção. Através de feedback e interações constantes, garantindo a agilidade e eficiência do processo. </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white h-96 pb-32'>

            </div>
        </div>
    )
}

export default AboutMe;