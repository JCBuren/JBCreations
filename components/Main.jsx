import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    {/* <p className='uppercase text-sm tracking-widest'>
                        Let's Build Something Together
                    </p> */}
                    <h1 className='py-4'>
                        Hi, I'm <span className='text-[#B57B49]'> Jordan </span>
                    </h1>
                    <h1 className='py-4'>
                        A Front-End Web Developer
                    </h1>
                    <p className='py-8 max-w-[70%] m-auto'>
                        I'm a Front-End Developer with..........
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