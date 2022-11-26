import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <h1 className='py-4'>
                        Hi, I'm <span className='text-[#B57B49]'> Jordan </span>
                    </h1>
                    <h1 className='py-4'>
                        A Full-Stack Web Developer
                    </h1>
                    <p className='font-bold py-8 max-w-[70%] m-auto'>
                    I'm a full stack web developer with experience building web applications utilizing JavaScript, React, Ruby on Rails, as well as Next.JS and Tailwind CSS. My passion has always been helping people, and I'm excited to get the opportunity to do that through web development.
                    </p>
                    <div className=' flex items-center justify-between max-w-[580px] m-auto py-8'>
                        <div className='bg-[#B57B49] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn size={40}/>
                        </div>
                        <div className='bg-[#B57B49] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub size={40}/>
                        </div>
                        <div className='bg-[#B57B49] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail size={40}/>
                        </div>
                        <div className='bg-[#B57B49] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill size={40}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main