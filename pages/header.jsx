import { FaRegMoon } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi'
import Button from './components/button';
import { FaRegUser, FaRegListAlt, FaBloggerB } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai'
import { FiBriefcase } from 'react-icons/fi'
import { RiContactsBookLine } from 'react-icons/ri'


import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header() {
    const router = useRouter();
    const [isMenu, setIsMenu] = useState(false);
    const menuItems = [
        {
            href: '/',
            title: 'Home',
            icon: <AiOutlineHome />
        },
        {
            href: '/about',
            title: 'About',
            icon: <FaRegUser />
        },
        {
            href: '/resume',
            title: 'Resume',
            icon: <FaRegListAlt />
        },
        {
            href: '/works',
            title: 'Works',
            icon: <FiBriefcase />
        },
        {
            href: '/blogs',
            title: 'Blogs',
            icon: <FaBloggerB />
        },
        {
            href: '/contact',
            title: 'Contact',
            icon: <RiContactsBookLine />
        },
    ];
    console.log(isMenu)
    return (
        <>
            <div className='header '>
                <div className=' flex lg:justify-between justify-between   xl:justify-center md:justify-between items-center xl:gap-32  lg:my-12 w-full'>

                    <img src='./logo.png' alt='error on logo image' className='' />

                    <div className='flex xl:ml-28'>
                        <Button />
                        <div className='flex  '>
                            <div className='mx-2 lg:mx-6 md:mx-4 xl:text-[24px] bg-white px-4 py-4 rounded-full'> <FaRegMoon /></div>
                            <div className='mx-3 bg-gradient-to-r from-[#FA5252] to-[#DD2476] xl:text-[24px] bg-white px-4 py-3  rounded-full lg:hidden block'>
                                <button onClick={() => { isMenu ? setIsMenu(false) : setIsMenu(true) }}><FiMenu /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`lg:hidden lx:hidden mobile_view ${isMenu ? '' : 'view_menu'}`}>
                <div className='flex flex-wrap'>
                    {menuItems.map((item,index) => (
                        <div className='m-2' key={index}>
                            <Link href={item.href}>
                                <a className="">
                                <div className={`flex rounded-lg border  border-slate-100  hover:text-white font-Poppins font-medium px-6 lg:px-4 py-3 hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-white ${router.asPath === item.path && 'bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-white rounded-lg border  border-slate-100  text-white font-Poppins font-medium px-6 py-3'}`}>
                                    <div className='mx-3 text-gray-600'>{item.icon}</div>
                                    <div className='text-[14px]  '> {item.title}</div>
                                </div>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


