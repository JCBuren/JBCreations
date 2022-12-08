import Image from 'next/image'
import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link'
import Phase5 from '../public/assets/projects/Phase5.PNG'

const animal = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
        className='absolute z-1'
        layout='fill'
        objectFit='cover'
        src={Phase5}
        alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        <h2 className='py-2'>605 Animal Rescue</h2>
        <h3>React JS / Ruby on Rails / CSS</h3>
        </div>
    </div>

    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
        <p>Project</p>
        <h2>Overview</h2>
        <p>
        This app is called 605 Animal Rescue, a Humane society application inspired by my 3 rescue animals. I built this app using React, Ruby on Rails and CSS for styling. Users can create an account and sign in to setup a visit with an available animal. This authentication is being handled using the Ruby Gem BCrypt, and I've also used the Faker Gem to help generate seed data.  
        </p>
        <a
            href='https://github.com/JCBuren/Capstone'
            target='_blank'
            rel='noreferrer'
        >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
        </a>
        <a
            href='/'
            target='_blank'
            rel='noreferrer'
        >
            <button className='px-8 py-2 mt-4'>Demo</button>
        </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
        <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
            <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Ruby on Rails
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> PostgreSQL
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> B Crypt
            </p>
            </div>
        </div>
        </div>
        <Link href='/#projects'>
        <p className='underline cursor-pointer'>Back</p>
        </Link>
    </div>
    </div>
);
};

export default animal