import Head from 'next/head'
import Header from './header'
import {FaDownload, FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';

import { BiBasketball } from 'react-icons/bi'

export default function Home() {
  return (
    <div className='main_div'>
      <Head>
        <title>Bostami Webside</title>
        <link rel="icon" href="/favicon-icon.ico" />
      </Head>
      <div>
        <Header />
      </div>
      <div className='flex flex-col items-center  mt-36'>
        <div >
          <img className=' rounded-full w-[350px] ' src='./profile-image.jpg' alt='error on profile image' />
        </div>
        <div className='mt-6 mb-1 text-5xl font-semibold font-Poppins'>Preeti Thakur</div>
        <div className='my-2 text-[#7B7B7B]'>UI/UX Designer</div>
        <div className='flex gap-4'>
          <div className='text-4xl'><FaFacebookF className='px-3 bg-white hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef]  hover:text-white  text-blue-600 rounded-xl' /></div>
          <div className='text-4xl'><FaTwitter className='px-2 bg-white  text-sky-500 rounded-xl hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef]  hover:text-white ' /></div>
          <div className='text-4xl'><BiBasketball className='px-2 bg-white  text-pink-500 rounded-xl hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef]  hover:text-white ' /></div>
          <div className='text-4xl'><FaLinkedinIn className='px-2 bg-white  text-sky-600 rounded-xl hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef]  hover:text-white ' /></div>
        </div>
        <div className='px-6 py-4 rounded-full mt-4 bg-gradient-to-r from-[#FA5252] to-[#DD2476] flex gap-4 text-white'><span className='text-2xl'><FaDownload /></span><spna className="text-lg font-P">Download CV</spna></div>
      </div>
    </div>
  )
}
