"use client"
import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link, animateScroll as scroll } from 'react-scroll';

import './styles.css';
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa';

interface FormState {
    name: string;
    email: string;
    tel: string;
    text: string;
    message: string;
}

const Footer: React.FC = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        email: '',
        tel: '',
        text: '',
        message: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isFormCleared, setIsFormCleared] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Partial<FormState> = {};
        if (formData.name.trim() === '') {
            newErrors.name = 'Por favor, preencha seu nome.';
        }
        if (formData.email.trim() === '') {
            newErrors.email = 'Por favor, preencha seu e-mail.';
        }
        // Adicione outras validações necessárias para os campos restantes

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Lógica para enviar o formulário, por exemplo, chamada de API
            console.log('Formulário enviado:', formData);
            // Redefinir o estado do formulário e erros
            setFormData({
                name: '',
                email: '',
                tel: '',
                text: '',
                message: '',
            });
            setErrors({});
            setIsFormSubmitted(true);
            setIsFormCleared(true);
        }
    };

    useEffect(() => {
        if (isFormSubmitted) {
            const timer = setTimeout(() => {
                setIsFormSubmitted(false);
                setIsFormCleared(false);
            }, 5000); // 5000 ms = 5 segundos

            return () => {
                clearTimeout(timer);
            };
        }
    }, [isFormSubmitted]);

    return (
        <footer id='tell-me' className='border-t-8 border-yellow-500 h-screen'>
            <div className='flex flex-col justify-center items-center mt-28 gap-6'>
                <h1 className='text-6xl'>Fale Comigo</h1>
                <p className='max-[860px]:text-center'>
                    Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados que em breve entraremos em contato.
                </p>
            </div>
            <form className='h-screen relative' onSubmit={handleSubmit}>
                <div className='flex flex-col justify-center items-center mt-16 gap-10'>
                    <div className='flex gap-10 max-[860px]:flex-col'>
                        <div className='flex flex-col items-start gap-2'>
                            <label htmlFor='name'>SEU NOME</label>
                            <input
                                className={`rounded-2xl px-6 py-2 w-96 outline-none ${errors.name ? 'border-red-500' : 'text-gray-500'
                                    }`}
                                type='text'
                                id='name'
                                required
                                name='name'
                                placeholder='Digite aqui'
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className='text-red-500'>{errors.name}</span>}
                        </div>

                        <div className='flex flex-col items-start gap-2'>
                            <label htmlFor='email'>E-MAIL</label>
                            <input
                                className={`rounded-2xl px-6 py-2 w-96 outline-none ${errors.email ? 'border-red-500' : 'text-gray-500'
                                    }`}
                                type='text'
                                name='email'
                                id='email'
                                required
                                placeholder='email@exemplo.com'
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className='text-red-500'>{errors.email}</span>}
                        </div>
                    </div>

                    <div className='flex gap-10 max-[860px]:flex-col'>
                        <div className='flex flex-col items-start gap-2 -ml-1 '>
                            <label htmlFor='name'>TELEFONE</label>
                            <input
                                className='rounded-2xl px-6 py-2 w-64 max-[860px]:w-96 outline-none text-gray-500'
                                type='tel'
                                name='tel'
                                id='tel'
                                placeholder='(_ _) _ _ _ _ _ _ _ _ _'
                                onChange={handleChange}
                                value={formData.tel}
                            />
                        </div>

                        <div className='flex flex-col items-start gap-2 '>
                            <label htmlFor='email'>ASSUNTO</label>
                            <input
                                className={`rounded-2xl px-6 py-2 w-custom max-[860px]:w-96 outline-none ${errors.text ? 'border-red-500' : 'text-gray-500'
                                    }`}
                                type='text'
                                name='text'
                                id='text'
                                required
                                placeholder='Digite aqui'
                                onChange={handleChange}
                                value={formData.text}
                            />
                            {errors.text && <span className='text-red-500'>{errors.text}</span>}
                        </div>
                    </div>

                    <div className='flex gap-10'>
                        <div className='flex flex-col items-start gap-2 -ml-custom3 max-[860px]:ml-0'>
                            <label htmlFor='name'>MENSAGEM</label>
                            <textarea
                                className={`rounded-2xl px-6 py-2 w-custom2 max-[860px]:w-96 h-56 max-[860px]:h-32 outline-none ${errors.text ? 'border-red-500' : 'text-gray-500'
                                    }`}
                                name='message'
                                id='message'
                                placeholder='Escreva aqui sua mensagem'
                                onChange={handleChange}
                                value={formData.message}
                            />
                            {errors.text && <span className='text-red-500'>{errors.text}</span>}
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-10'>
                    <button
                        className='flex items-center justify-center gap-2 bg-yellow-500 text-black text-lg font-bold px-10 py-2 w-96 rounded-3xl hover:bg-amber-400 transition-colors'
                        type='submit'
                    >
                        Enviar
                        <FaPaperPlane color='#000' size={15} />
                    </button>
                </div>
                <div className='mt-20 flex items-center justify-center gap-6 max-[1300px]:flex'>
                    <div className='text-center'>
                        <h3 className='text-3xl'>
                            <span className='text-yellow-500'>DEV</span>EDU
                        </h3>
                        <h3>FREELANCE•DEVELOPER</h3>
                    </div>
                    <div className='linee'></div>
                </div>
                <div className='mt-20 flex justify-center gap-36 max-[1300px]:flex-col'>
                    <div className='flex gap-36 max-[1300px]:justify-center'>
                        <div className='gap-2 flex flex-col'>
                            <h2 className='mb-5 text-yellow-500 font-bold text-lg'>MENU</h2>
                            <Link
                                className='hover:opacity-70 transition-opacity cursor-pointer'
                                to="home"
                                smooth={true}
                                duration={500}
                                offset={-100}
                            >Home</Link>
                            <Link
                                className='hover:opacity-70 transition-opacity cursor-pointer'
                                to="about-me"
                                smooth={true}
                                duration={500}
                                offset={100}
                            >Quem sou</Link>
                            <Link
                                className='hover:opacity-70 transition-opacity cursor-pointer'
                                to="what-do-i-do"
                                smooth={true}
                                duration={500}
                                offset={100}
                            >O que faço</Link>
                            <Link
                                className='hover:opacity-70 transition-opacity cursor-pointer'
                                to="portfolio"
                                smooth={true}
                                duration={500}
                                offset={100}
                            >Portfólio</Link>
                            <Link
                                className='hover:opacity-70 transition-opacity cursor-pointer'
                                to="tell-me"
                                smooth={true}
                                duration={500}
                                offset={100}
                            >Contato</Link>
                        </div>
                        <div className=' flex flex-col gap-2'>
                            <h2 className='mb-5 text-yellow-500 font-bold text-lg'>REDES SOCIAIS</h2>
                            <a
                                className='hover:opacity-70 transition-opacity cursor-pointer'
                                href="https://instagram.com/eduardoogoncalvess_/"
                                target='_blank'
                            >Instagram</a>
                            <a
                                className='hover:opacity-70 transition-opacity cursor-pointer'
                                href="https://www.linkedin.com/in/eduardo-gon%C3%A7alves1/"
                                target='_blank'
                            >LinkedIn</a>
                            <a
                                className='hover:opacity-70 transition-opacity cursor-pointer'
                                target='_blank'
                                href='https://github.com/013Edu'
                            >Github</a>
                        </div>
                    </div>
                    <div className='flex gap-36 max-[1300px]:justify-center max-[515px]:flex-col'>
                        <div className='flex flex-col items-center justify-center -mt-24 gap-2 max-[1300px]:-mt-0'>
                            <div className='flex items-center gap-2'>
                                <div className='bg-slate-50 p-1 rounded mr-2'>
                                    <FaPhone size={25} color='#000' />
                                </div>
                                <h2>TELEFONE DE<br /> ATENDIMENTO</h2>
                            </div>
                            <div className='flex items-center gap-5'>
                                <div className='bg-slate-50 p-1 rounded'>
                                    <FaEnvelope size={25} color='#000' />
                                </div>
                                <h2>E-MAIL PARA<br /> CONTATO</h2>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 max-[515px]:items-center'>
                            <h2 className='text-3xl font-bold max-[860px]:text-lg'>(83) 9 8617-5383</h2>
                            <h2 className='text-3xl font-bold max-[860px]:text-lg'>sobral.je81@gmail.com</h2>
                        </div>
                    </div>
                </div>
                <div className='py-20 mt-10 bg-neutral-950 flex items-center justify-center'>
                    <h2 className='text-neutral-400'>Copyright © 2023 Eduardo Gonaçalves</h2>
                </div>
                <CSSTransition
                    in={isFormSubmitted}
                    timeout={3000}
                    classNames='fade'
                    unmountOnExit
                >
                    <div className='flex justify-center items-center absolute bottom-96 right-5 max-[1158px]:fixed max-[1158px]:right-10'>
                        <div className='bg-yellow-500 p-3 rounded-xl shadow-xl h-20'>
                            <h2 className='text-lg font-bold mb-4 text-black'>Mensagem enviada!</h2>
                            <p className='text-sm text-black font-bold'>Obrigado pelo seu contato. Entraremos em contato em breve.</p>
                        </div>
                    </div>
                </CSSTransition>
            </form>
        </footer>
    );
};

export default Footer;
