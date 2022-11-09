import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import AboutImg from '../public/assets/AboutImg.jpg'


const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
                
                    </p>
            <h2 className='py-4 text-[#EE882F] font-bold'>Who I Am</h2>
            <p className='py-2 font-bold'>
                Description of skills here                 Description of skills here
                Description of skills here
                Description of skills here
                Description of skills here
                Description of skills here
                Description of skills here
                Description of skills here
                Description of skills here
                Description of skills here
                Description of skills here

            </p>
            <p className='py-2 font-bold'>
            Description of skills here                Description of skills here
            Description of skills here
            Description of skills here
            Description of skills here
            Description of skills here
            Description of skills here
            Description of skills here
            Description of skills here
            Description of skills here

            </p>
        </div>
        <div className='w-[650px] h-[650px] shadow-xl shadow-gray-400 rounded-xl flex  justify-center p-2 hover:scale-105 ease-in duration-300'>
            <Image src={AboutImg} className=' w-[550px] h-[550px] rounded-xl' alt='/' />
            </div>
        </div>
    </div>);
};

export default About