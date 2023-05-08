import React from 'react';
import { hero_image } from '../assets';

const Hero = ({ title = 'Здравствуйте!', description = 'Добро пожаловать', image = hero_image }) => {
  return (
    <div className='flex flex-col p-10'>
        <div>
            <h1 className='text-[45px] font-extrabold text-gray-800'>{title}</h1>
        </div>
        <div>
            <p className='text-[18px]'>{description}</p>
        </div>
        <div className='w-[90%] mt-4'>
          <img src={image} />
        </div>
    </div>
  )
}

export default Hero