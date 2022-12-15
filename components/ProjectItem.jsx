import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
    return (
        <div className='relative flex justify-center max-h-[300px] max-w-[600px] shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#D6801E] to-[#b58c34]'>
        <Image className='h-[300px] w-[600px] rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' /> 
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-white font-bold text-center'>{tech}</p>
            <Link href={projectUrl}>
                <p className='text-center py-3 rounded-lg bg-white text-[#050303] font-bold text-lg cursor-pointer'>More Info</p>
            </Link>
        </div>
    </div>
    )
}

export default ProjectItem