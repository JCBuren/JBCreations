import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import NextJS from '../public/assets/skills/nextjs.png'
import Ruby from '../public/assets/skills/ruby.png'

export const Skills = () => {
    return (
<div id='skills' className='w-full lg:h-screen p-2'>
    <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
    
    <h2 className='py-4 text-[#B57B49]'>What I Can Do</h2>
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className=' bg-[#B57B49] text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto '>
            <Image src={Html} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3>HTML</h3>
            </div>
        </div>
        </div>
        <div className='bg-[#B57B49] text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src={Css} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3>CSS</h3>
            </div>
        </div>
        </div>
        <div className='bg-[#B57B49] text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src={Javascript} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3>JavaScript</h3>
            </div>
        </div>
        </div>
        <div className='bg-[#B57B49] text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src={ReactImg} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3>React</h3>
            </div>
        </div>
        </div>
        <div className='bg-[#B57B49] text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src={Ruby} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3>Ruby on Rails</h3>
            </div>
        </div>
        </div>
        <div className='bg-[#B57B49] text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src={Tailwind} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3>Tailwind</h3>
            </div>
        </div>
        </div>
        
        

        <div className='bg-[#EE882F] text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src={Github} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3>Github</h3>
            </div>
        </div>
        </div>
        <div className='bg-[#EE882F] text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
            <Image src={NextJS} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3>Next</h3>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
);
};

export default Skills