import Image from 'next/image';
import React from 'react';

import ReactLogo from '../../assets/react.png'

interface ItemSkillProps {
    text: string;
    image: string;
}

const ItemSkill: React.FC<ItemSkillProps> = ({ image, text }) => {
    return (
        <div>
            <div className='text-center w-24'>
                <Image
                    src={image}
                    alt={text}
                    quality={100}
                    width={100}
                    className='rounded-xl'
                />
                <h3 className='mt-2'>
                    {text}
                </h3>
            </div>
        </div>
    )
}

export default ItemSkill;