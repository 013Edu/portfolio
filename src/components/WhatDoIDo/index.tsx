import Image from 'next/image';
import React from 'react';

import App from "../../../public/assets/mobile.png"
import Web from "../../../public/assets/react.png"
import Design from "../../../public/assets/proti.png"

const WhatDoIDo: React.FC = () => {

    return (
        <div>
            <div className='flex justify-center bg-white pt-44'>
                <div className='flex gap-6 max-[740px]:hidden max-[375px]:hidden'>
                    <p className='text-gray-300 text-2xl'>•</p>
                    <p className='text-gray-300 text-2xl'>•</p>
                    <p className='text-gray-300 text-2xl'>•</p>
                    <p className='text-gray-300 text-2xl'>•</p>
                    <p className='text-gray-300 text-2xl'>•</p>
                    <p className='text-gray-300 text-2xl'>•</p>
                    <p className='text-gray-300 text-2xl'>•</p>
                </div>
                <div className='flex flex-col justify-center items-center mx-10 gap-3'>
                    <h2 className='text-purple-900 font-bold text-5xl'>O que faço</h2>
                    <h3 className='text-black font-bold'>SERVIÇOS E SOLUÇÕES</h3>
                </div>
                <div className='flex gap-6 max-[740px]:hidden max-[375px]:hidden'>
                    <p className='text-gray-300 text-2xl'>•</p>
                    <p className='text-gray-300 text-2xl'>•</p>
                    <p className='text-gray-300 text-2xl'>•</p>
                    <p className='text-gray-300 text-2xl'>•</p>
                    <p className='text-gray-300 text-2xl'>•</p>
                    <p className='text-gray-300 text-2xl'>•</p>
                    <p className='text-gray-300 text-2xl'>•</p>
                    <p className='text-gray-300 text-2xl'>•</p>
                </div>
            </div>
            <div className='bg-white flex flex-col items-center text-center pt-20'>
                <div className='flex flex-col items-center pb-12 border-b-2 w-full max-w-5xl'>
                    <Image
                        src={App}
                        alt='Logo do app'
                        width={100}
                        height={100}
                    />
                    <h2 className='text-black my-3 text-5xl'>
                        Aplicativos
                    </h2>
                    <h3 className='text-neutral-500 font-bold'>ANDROID E IOS</h3>
                    <p className='text-neutral-500 font-extralight my-3'>Desenvolvimento de aplicativos através do<br /> framework React Native.</p>
                    <button className='text-black rounded-lg border border-black p-2 transition-colors hover:bg-black hover:text-white'>
                        Saiba mais
                    </button>
                </div>
            </div>
            <div className='flex bg-white justify-center max-[375px]:flex-col '>
                <div className='flex flex-col bg-white items-center pt-12 border-r-2 pr-20 max-[375px]:pr-0'>
                    <Image
                        src={Web}
                        alt='Logo do react'
                        width={100}
                        height={100}
                        className='rounded-2xl'
                    />
                    <h2 className='text-black my-3 text-5xl'>
                        Web
                    </h2>
                    <h3 className='text-neutral-500 font-bold'>DESENVOLVIMENTO WEB</h3>
                    <p className='text-neutral-500 font-extralight my-3 text-center'>Desenvolvimento de sites, landing pages e softwares<br /> com as tecnologias mais atuais do mercado.</p>
                    <button className='text-black rounded-lg border border-black p-2 transition-colors hover:bg-black hover:text-white'>
                        Saiba mais
                    </button>
                </div>
                <div className='flex flex-col bg-white items-center pt-12 pl-12 max-[375px]:pl-0'>
                    <Image
                        src={Design}
                        alt='Imagem de um compasso'
                        width={100}
                        height={100}
                        className='rounded-2xl'
                    />
                    <h2 className='text-black my-3 text-5xl'>
                        UX
                    </h2>
                    <h3 className='text-neutral-500 font-bold'>PROTOTIPAGEM</h3>
                    <p className='text-neutral-500 font-extralight my-3 text-center'>Desenvolvimento de protótipos em baixa<br /> fidelidade para validação de fluxo e experiência do usuário.</p>
                    <button className='text-black rounded-lg border border-black p-2 transition-colors hover:bg-black hover:text-white'>
                        Saiba mais
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WhatDoIDo;