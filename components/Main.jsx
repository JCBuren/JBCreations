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
                        Hi, I&#39;m <span className='text-[#B57B49]'> Jordan </span>
                    </h1>
                    <h1 className='py-4'>
                        A Full-Stack Web Developer
                    </h1>
                    <p className='font-bold py-8 max-w-[70%] m-auto'>
                    I&#39;m a full stack web developer with experience in JavaScript, React, Ruby on Rails, CSS, as well as Next.JS and Tailwind. My passion has always been helping people, and learning the many ways you can leverage responsive front-end technologies has given me a fresh perspective on ways I can do just that.
                    </p>
                    <div className=' flex items-center justify-between max-w-[580px] m-auto py-8'>
                        <div className='bg-[#B57B49] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            
                        <a  
                            href='https://www.linkedin.com/in/jburen/'
                            target='_blank'
                            rel='noreferrer'
                        >
                        <FaLinkedinIn size={40}/>
                        </a>
                        </div>
                    
                        <div className='bg-[#B57B49] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a
                            href='https://github.com/JCBuren'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaGithub size={40}/>
                            </a>
                        </div>
                        <div className='bg-[#B57B49] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail onClick={() => window.location = 'mailto:JBuren1957@gmail.com'} size={40}/>
                        </div>
                        <div className='bg-[#B57B49] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a
                            href='https://1drv.ms/b/s!AkBwWW2yMBcShBU4VtHkVVxqlgvy?e=dLkriC'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <BsFillPersonLinesFill size={40}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main