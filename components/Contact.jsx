import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import HeadshotImg from '../public/assets/photorefs/Headshot.png';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef()
    
    const sendEmail = (e) => {
        e.preventDefault();
        
        
        emailjs.sendForm('service_7wp5e8c', 'template_utptyfv', form.current, 'rs42lMZodW4SIb3ou')
        .then((result) => {
            console.log(result.text);}, 
            (error) => {console.log(error.text);});
            e.target.reset()
        };
        
    return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
        </p>
        <h2 className='py-4 text-[#D6801E]'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
        <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
                <div>
                <Image
                className='rounded-xl scale-120 hover:scale-105 ease-in duration-300'
                src={HeadshotImg}
                alt='/'
                />
                </div>
            <div>
                <h2 className='py-2'>Jordan Buren</h2>
                <p className='uppercase'>Front-End Developer</p>
                <p className='py-4'>
                I am open to freelance work or full-time positions. Contact
                me and let&#39;s chat.
                </p>
                </div>
            <div>
                <p className='uppercase pt-8 pb-6'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                <a
                    href='https://www.linkedin.com/in/jburen/'
                    target='_blank'
                    rel='noreferrer'
                >
                    <div className='bg-[#D6801E] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn size={30}/>
                    </div>
                </a>
                <a
                    href='https://github.com/JCBuren'
                    target='_blank'
                    rel='noreferrer'
                >
                    <div className='bg-[#D6801E] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub size={30}/>
                    </div>
                </a>

                <div className='bg-[#D6801E] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail onClick={() => window.location = 'mailto:JBuren1957@gmail.com'} size={30}/>
                </div>
                <Link href='/resume'>
                    <a>
                    <div className='bg-[#D6801E] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill size={30}/>
                    </div>
                    </a>
                </Link>
                </div>
            </div>
            </div>
        </div>


          {/* right */}
        <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
            <form ref={form} onSubmit={sendEmail}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 font-bold'>Name</label>
                    <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='user_name'
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 font-bold'>
                    Phone Number
                    </label>
                    <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='user_phone'
                    />
                </div>
                </div>
                <div className='flex flex-col py-2 font-bold'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='user_email'
                />
                </div>
                <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2 font-bold'>Subject</label>
                <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                />
                </div>
                <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2 font-bold'>Message</label>
                    <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4 font-bold'>
                    Send Message
                </button>
                </form>
            </div>
        </div>
        </div>
        <div className='flex justify-center py-12'>
        <Link href='/'>
            <a>
                <div className='bg-[#D6801E] rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                className='text-white text-bold'
                size={40}
                />
                </div>
            </a>
        </Link>
        </div>
    </div>
    </div>
    );
};

export default Contact;