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
            <h2 className='py-4 text-[#B57B49] font-bold'>A Bit About Me</h2>
            <p className='py-2 font-bold'>
            I spent the last 6 years in Technical Support as a Supervisor and Trainer in the Telehealth Field. While managing a team of around 70-100 agents I created hundreds of Sharepoint pages for the agents to reference, and that is where I first saw the power of coding. Frustrated with the restrictions of working with a tool like Sharepoint, I researched ways to maximize it&#39;s use. I found a few scripts that allowed me to change the web parts to display information to agents and this method soon became the gold-standard for our call-center. After seeing the impact of a few simple scripts, I was quickly drawn into diving further into &#34;Real&#34; Web Development.

            </p>
            <p className='py-2 font-bold'>
            After some consideration, I decided to enroll in Flatiron School&#39;s Web Development Course in June of 2022. Through the 4 month program I learned Javascript, React and Ruby on Rails and since graduation in September I&#39;ve also gained experience in Next.JS and Tailwind CSS. Going through a program like the one at Flatiron really helped me &#34;Learn how to learn&#34; when it comes to picking up languages and I&#39;m eager to continue to add to those skills. 
            </p>
        </div>
        <div className='w-[650px] h-[650px] shadow-xl shadow-gray-400 rounded-xl flex  justify-center p-2 hover:scale-105 ease-in duration-300'>
            <Image src={AboutImg} className=' w-[550px] h-[550px] rounded-xl' alt='/' />
            </div>
        </div>
    </div>);
};

export default About