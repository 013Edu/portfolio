import Image from 'next/image';
import React from 'react';

import "./styles.css"

const ItemPortfolio: React.FC = () => {
    return (
        <div>
            <div className='group'>
                <div className='bg relative '>
                </div>
                <div className='flex flex-col absolute top-64 left-10 opacity-0 group-hover:opacity-100'>
                    <h2 className='text-white text-2xl font-bold'>Aluroni</h2>
                    <div className='text-white my-2 flex gap-2'>
                        <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>Typescript</button>
                        <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>React</button>
                        <button className='bg-purple-500 p-1 rounded-2xl text-xs text-white font-bold'>CSS</button>
                    </div>
                    <button className='text-white border rounded-2xl p-1 px-2 border-white hover:bg-purple-700 hover:border-purple-700 transition-colors'>Ver detalhes do projeto</button>
                </div>
            </div>
        </div>
    )
}

export default ItemPortfolio;