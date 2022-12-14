import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center justify-center '>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <h1 className='py-4'>
                        Hi, I&#39;m <span className='text-[#D6801E]'> Jordan </span>
                    </h1>
                    <h1 className='py-4'>
                        A Full-Stack Web Developer
                    </h1>
                    <p className='py-4 sm:max-w-[70%] m-auto'>
                        Full-Stack software developer with a background in technical support and training. My passion has always been helping people, and the unlimited tools available to you as a developer has given me a new perspective on how to pursue that passion. I&#39;m currently focused on building responsive front-end applications while learning new back-end technologies.
                    </p>
                    <div className=' flex justify-between max-w-[580px] m-auto py-8'>
                        <div className='bg-[#D6801E] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            
                        <a  
                            href='https://www.linkedin.com/in/jburen/'
                            target='_blank'
                            rel='noreferrer'
                        >
                        <FaLinkedinIn size={40}/>
                        </a>
                        </div>
                    
                        <div className='bg-[#D6801E] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a
                            href='https://github.com/JCBuren'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaGithub size={40}/>
                            </a>
                        </div>
                        <div className='bg-[#D6801E] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail onClick={() => window.location = 'mailto:JBuren1957@gmail.com'} size={40}/>
                        </div>
                        <div className='bg-[#D6801E] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
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