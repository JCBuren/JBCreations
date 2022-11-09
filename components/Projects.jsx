import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'
import Phase2 from '../public/assets/projects/Phase2.PNG'
import Phase3 from '../public/assets/projects/Phase3.PNG'
import Phase4 from '../public/assets/projects/Phase4.PNG'
import Phase5 from '../public/assets/projects/Phase5.PNG'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
    
        </p>
        <h2 className='pb-8 text-[#B57B49]'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-10'>
        
        <ProjectItem
            title='NFL Stat-Trak'
            backgroundImg={Phase2}
            projectUrl='/nfl'
            tech='React JS'
        />
        <ProjectItem
            title='Fastcare Telehealth'
            backgroundImg={Phase3}
            projectUrl='/fastcare'
            tech='React JS'
        />
        <ProjectItem
            title='Intramural Sports'
            backgroundImg={Phase4}
            projectUrl='/sports'
            tech='React JS'
        />
        <ProjectItem
            title='605 Animal Rescue'
            backgroundImg={Phase5}
            projectUrl='/animal'
            tech='React JS'
        />      
        </div>
    </div>
    </div>
);
};

export default Projects;