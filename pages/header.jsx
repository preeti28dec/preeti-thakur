import { FaRegMoon } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi'
import Button from './components/button';

export default function Header() {
    return (
        <>
            <div className='header '>
                <div className=' flex justify-between lg:justify-center items-center gap-32  lg:my-16 w-full'>
                    <div className=''>
                        <img src='./logo.png' alt='error on logo image' className='' />
                    </div>
                    <div className='flex'>
                        <Button />
                        <div className='flex '>
                            <div className='mx-6 text-[24px] bg-white px-3 py-3 rounded-full'> <FaRegMoon /></div>
                            <div className='mx-3 bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-2xl bg-white px-2 py-2 rounded-full lg:hidden block'>
                                <FiMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}