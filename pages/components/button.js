import React from 'react'
import Link from 'next/link'
import { FaRegUser, FaRegListAlt, FaBloggerB } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai'
import { FiBriefcase } from 'react-icons/fi'
import { RiContactsBookLine } from 'react-icons/ri'

const BUTTON = [
    { icon: <AiOutlineHome />, name: "Home", theme: "", path: '/'},
    { icon: <FaRegUser />, name: "About", theme: "", path: '/about' },
    { icon: <FaRegListAlt />, name: "Resume", theme: "", path: '/resume' },
    { icon: <FiBriefcase />, name: "Works", theme: "", path: '/works' },
    { icon: <FaBloggerB />, name: "Blogs", theme: "", path: '/blogs' },
    { icon: <RiContactsBookLine />, name: "Contact", theme: "", path: '/contact' },
]

function Button() {
    return (
        <div className='hidden lg:block'>
            <div className="flex justify-center gap-6">
                {BUTTON.map((item) => {
                    return (
                        <Link href={item.path} key={item.path} >
                            <a>
                                <div className='rounded-lg border text-slate-700 border-slate-100  hover:text-white font-Poppins font-medium px-6 py-3 hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-white'>
                                    <div className='flex justify-around gap-2 items-center'>
                                        <div className='text-[20px] '>{item.icon}</div>
                                        <div className='text-sm'>{item.name}</div>
                                    </div>
                                    <div className=''>{item.theme}</div>
                                </div>
                            </a>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Button
