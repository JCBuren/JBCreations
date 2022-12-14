import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router'
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import NavLogo from '../public/assets/NavLogo.png'

const Navbar = () => {

const [nav, setNav] = useState(false);
const [shadow, setShadow] = useState(false);
const [navBg, setNavBg] = useState('#ecf0f3');
const [linkColor, setLinkColor] = useState('#1f2937');
const [position, setPosition] = useState('fixed')
const router = useRouter();

useEffect(() => {
if (
    router.asPath === '/nfl' ||
    router.asPath === '/fastcare' ||
    router.asPath === '/sports' ||
    router.asPath === '/animal'
) {
    setNavBg('transparent');
    setLinkColor('#ecf0f3');
} else {
    setNavBg('#ecf0f3');
    setLinkColor('#1f2937');
}
}, [router]);

const handleNav = () => {
setNav(!nav);
};

useEffect(() => {
const handleShadow = () => {
    if (window.scrollY >= 90) {
    setShadow(true);
    } else {
    setShadow(false);
    }
};
window.addEventListener('scroll', handleShadow);
}, []);
    

return (
    <div
    style={{ backgroundColor: `${navBg}` }}
    className={
        shadow
            ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
            : 'fixed w-full h-20 z-[100]'
            }
    >
    <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
            <a>
                <Image
                    src={NavLogo}
                    alt='/'
                    width='250'
                    height='250'
                    className='cursor-pointer'
                />
            </a>
        </Link>
        <div>
            <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
                <li className='text-[#D6801E] font-bold text-md ml-10  uppercase hover:border-b'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='text-[#D6801E] font-bold text-md ml-10 uppercase hover:border-b'>
                    <Link href='/#about'>About</Link>
                </li>
                <li className='text-[#D6801E] font-bold text-md ml-10 uppercase hover:border-b'>
                    <Link href='/#skills'>Skills</Link>
                </li>
                <li className='text-[#D6801E] font-bold text-md ml-10 uppercase hover:border-b'>
                    <Link href='/#projects'>Projects</Link>
                </li>
                <li className='text-[#D6801E] font-bold text-md ml-10 uppercase hover:border-b'>
                    <Link href='https://docs.google.com/document/d/e/2PACX-1vT-VWKp9LoUHsNDwSog7AEnXUeSIwgrTPSCRQm6_6Yzx2Zty00GLN_UbWnnD_DvDZmsjiV9keAnEDYC/pub'>Resume</Link>
                </li>
                <li className='text-[#D6801E] font-bold text-md ml-10 uppercase hover:border-b'>
                    <Link href='/#contact'>Contact</Link>
                </li>
            </ul>
{/* Hamburger Icon */}
        <div
        style={{ color: `${linkColor}` }}
        onClick={handleNav}
        className='md:hidden'
        >
            <AiOutlineMenu size={25} />
                </div>
                </div>
            </div>
        
{/* Mobile Menu */}
{/* Overlay */}
            <div
            className={
                nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
            }
            >
{/* Side Drawer Menu */}
            <div
            className={
                nav
                    ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }
            >
            <div>
                <div className='flex w-full items-center justify-between'>
                    <Link href='/'>
                        <a>
                        <Image
                            src={NavLogo}
                            width='175'
                            height='175'
                            alt='/'
                        />
                        </a>
                    </Link>
                <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                >
            <AiOutlineClose />
                </div>
                </div>
                <div className='border-b border-gray-300'>
                    <p className='w-[85%] md:w-[90%] py-4 font-bold'>
                        Improbable doesn&#39;t always mean impossible.

                    </p>
                </div>
            </div>
            <div className='py-2 flex flex-col'>
                <ul className='uppercase font-bold'>
                    <Link href='/'>
                        <li onClick={() => setNav(false)} className='py-4 text-sm'>
                        Home
                        </li>
                    </Link>
                    <Link href='/#about'>
                        <li onClick={() => setNav(false)} className='py-4 text-sm'>
                        About
                        </li>
                    </Link>
                    <Link href='/#skills'>
                        <li onClick={() => setNav(false)} className='py-4 text-sm'>
                        Skills
                        </li>
                    </Link>
                    <Link href='/#projects'>
                        <li onClick={() => setNav(false)} className='py-4 text-sm'>
                        Projects
                        </li>
                    </Link>
                    <div>
                    <a 
                    href='https://docs.google.com/document/d/e/2PACX-1vT-VWKp9LoUHsNDwSog7AEnXUeSIwgrTPSCRQm6_6Yzx2Zty00GLN_UbWnnD_DvDZmsjiV9keAnEDYC/pub'
                    target='_blank'
                    rel='noreferrer'>
                        <li onClick={() => setNav(false)} className='py-4 text-sm'>
                        Resume
                        </li>
                    </a>
                    </div>
                    <Link href='/#contact'>
                        <li onClick={() => setNav(false)} className='py-4 text-sm'>
                        Contact
                        </li>
                    </Link>
                    </ul>
                    <div className='pt-36'>
                        <p className='uppercase text-center tracking-widest text-[#5651e5]'>
                        My Links
                        </p>
                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                        <a
                        href='https://www.linkedin.com/in/jburen/'
                        target='_blank'
                        rel='noreferrer'
                        >
                    <div className='bg-[#D6801E] rounded-full shadow-lg shadow-gray-400 mx-2 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn size={30}/>
                        </div>
                        </a>
                        <a
                        href='https://github.com/JCBuren'
                        target='_blank'
                        rel='noreferrer'
                        >
                    <div className='bg-[#D6801E] rounded-full shadow-lg shadow-gray-400 mx-2 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaGithub size={30}/>
                    </div>
                        </a>
                        <Link href='/#contact'>
                        <div
                        onClick={() => setNav(!nav)}
                        className='bg-[#D6801E] rounded-full shadow-lg shadow-gray-400 mx-2 p-4 cursor-pointer hover:scale-105 ease-in duration-300'
                        >
                        <AiOutlineMail onClick={() => window.location = 'mailto:JBuren1957@gmail.com'} size={30}/>
                        </div>
                        </Link>
                        <Link href='/resume'>
                        <div
                            onClick={() => setNav(!nav)}
                            className='bg-[#D6801E] rounded-full shadow-lg shadow-gray-400 mx-2 p-4 cursor-pointer hover:scale-105 ease-in duration-300'
                        >
                            <BsFillPersonLinesFill size={30}/>
                        </div>
                        </Link>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar