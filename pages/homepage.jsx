import React from "react";
import Head from "next/head";
import Header from "./header";
import {
  FaDownload,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

import { BiBasketball } from "react-icons/bi";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
function Homepage() {
  return (
    <div className='main_div'>
      <Head>
        <title>Resume Webside</title>
        <link rel='icon' href='/favicon-icon.ico' />
      </Head>
      <div className='flex flex-col items-center  mt-36'>
        <div>
          <img
            className=' rounded-full w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] object-cover '
            src='https://i.ibb.co/QX3kP99/IMG-Sun-Jan-29-22-32-25-GMT05-30-2023.jpg'
            alt='error on profile image'
          />
        </div>
        <div className='mt-6 mb-1 text-3xl lg:text-5xl font-semibold font-Poppins'>
          Preeti
        </div>
        <div className='my-2 text-[#7B7B7B]'>Front-end Developer</div>
        <div className='flex gap-4'>
          <Link href='https://www.facebook.com/officialpreetithakur/'>
            <div className='text-4xl'>
              <FaFacebookF className='px-3 bg-white hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef]  hover:text-white  text-blue-600 rounded-xl' />
            </div>
          </Link>
          <Link href='https://twitter.com/impreetithakur'>
            <div className='text-4xl'>
              <FaTwitter className='px-2 bg-white  text-sky-500 rounded-xl hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef]  hover:text-white ' />
            </div>
          </Link>
          <Link href='https://github.com/preeti28dec'>
            <div className='text-4xl'>
              <AiFillGithub className='px-2 bg-white   rounded-xl hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef]  hover:text-white ' />
            </div>
          </Link>
          <Link href='https://www.linkedin.com/in/preeti-thakur-189548212'>
            <div className='text-4xl'>
              <FaLinkedinIn className='px-2 bg-white  text-sky-600 rounded-xl hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef]  hover:text-white ' />
            </div>
          </Link>
        </div>
        <a href="/file/myfile.pdf" target="_blank" download>
        <div className='px-6 py-4 rounded-full mt-4 bg-gradient-to-r from-[#FA5252] to-[#DD2476] flex gap-4 text-white'>
          <span className='text-2xl'>
            <FaDownload />
          </span>
          <spna className='text-lg font-P'>Download CV</spna>
        </div>
        </a>
      </div>
    </div>
  );
}

export default Homepage;
