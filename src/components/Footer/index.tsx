import React from 'react';

import "./styles.css"

import { FaEnvelope, FaPaperPlane, FaPhone } from "react-icons/fa"

const Footer: React.FC = () => {
    return (
        <footer className='border-t-8 border-yellow-500 h-screen'>
            <div className='flex flex-col justify-center items-center mt-28 gap-6'>
                <h1 className='text-6xl'>Fale Comigo</h1>
                <p>Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados que em breve entraremos em contato.</p>
            </div>
            <form className='h-screen'>
                <div className='flex flex-col justify-center items-center mt-16 gap-10'>
                    <div className='flex gap-10'>
                        <div className='flex flex-col items-start gap-2'>
                            <label htmlFor="name">SEU NOME</label>
                            <input className='rounded-2xl px-6 py-2 w-96 outline-none text-gray-500' type="text" name='name' placeholder='Digite aqui' />
                        </div>

                        <div className='flex flex-col items-start gap-2'>
                            <label htmlFor="email">E-MAIL</label>
                            <input className='rounded-2xl px-6 py-2 w-96 outline-none text-gray-500' type="text" name='email' placeholder='email@exemplo.com' />
                        </div>
                    </div>

                    <div className='flex gap-10'>
                        <div className='flex flex-col items-start gap-2 -ml-1'>
                            <label htmlFor="name">TELEFONE</label>
                            <input className='rounded-2xl px-6 py-2 w-64 outline-none text-gray-500' type="text" name='name' placeholder='(_ _) _ _ _ _ _ _ _ _ _' />
                        </div>

                        <div className='flex flex-col items-start gap-2'>
                            <label htmlFor="email">ASSUNTO</label>
                            <input className='rounded-2xl px-6 py-2 w-custom outline-none text-gray-500' type="text" name='email' placeholder='Digite aqui' />
                        </div>
                    </div>

                    <div className='flex gap-10'>
                        <div className='flex flex-col items-start gap-2 -ml-custom3'>
                            <label htmlFor="name">MENSAGEM</label>
                            <textarea className='rounded-2xl px-6 py-2 w-custom2 h-56 outline-none text-gray-500' name='name' placeholder='Escreva aqui sua mensagem' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-10'>
                    <button className='flex items-center justify-center gap-2 bg-yellow-500 text-black text-lg font-bold px-10 py-2 w-96 rounded-3xl hover:bg-amber-400 transition-colors'>
                        Enviar
                        <FaPaperPlane
                            color='#000'
                            size={15}
                        />
                    </button>
                </div>
                <div className='mt-20 flex items-center justify-center gap-6'>
                    <div className='text-center'>
                        <h3 className='text-3xl'><span className='text-yellow-500'>DEV</span>EDU</h3>
                        <h3>FREELANCE•DEVELOPER</h3>
                    </div>
                    <div className='linee'></div>
                </div>
                <div className='mt-20 flex justify-center gap-36'>
                    <div className='gap-2 flex flex-col'>
                        <h2 className='mb-5 text-yellow-500 font-bold text-lg'>MENU</h2>
                        <a className='hover:opacity-70 transition-opacity cursor-pointer'>Home</a>
                        <a className='hover:opacity-70 transition-opacity cursor-pointer'>Quem sou</a>
                        <a className='hover:opacity-70 transition-opacity cursor-pointer'>O que faço</a>
                        <a className='hover:opacity-70 transition-opacity cursor-pointer'>Portfólio</a>
                        <a className='hover:opacity-70 transition-opacity cursor-pointer'>Contato</a>
                    </div>
                    <div className=' flex flex-col gap-2'>
                        <h2 className='mb-5 text-yellow-500 font-bold text-lg'>REDES SOCIAIS</h2>
                        <a className='hover:opacity-70 transition-opacity cursor-pointer'>Instagram</a>
                        <a className='hover:opacity-70 transition-opacity cursor-pointer'>LinkedIn</a>
                        <a className='hover:opacity-70 transition-opacity cursor-pointer'>Github</a>
                    </div>
                    <div className='flex flex-col items-center justify-center -mt-24 gap-2'>
                        <div className='flex items-center gap-2'>
                            <div className='bg-slate-50 p-1 rounded mr-2'>
                                <FaPhone
                                    size={25}
                                    color='#000'
                                />
                            </div>
                            <h2>TELEFONE DE<br /> ATENDIMENTO</h2>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='bg-slate-50 p-1 rounded'>
                                <FaEnvelope
                                    size={25}
                                    color='#000'
                                />
                            </div>
                            <h2>E-MAIL PARA<br /> CONTATO</h2>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-3xl font-bold'>(83) 9 8617-5383</h2>
                        <h2 className='text-3xl font-bold'>sobral.je81@gmail.com</h2>
                    </div>
                </div>
            </form>
        </footer >
    )
}

export default Footer;