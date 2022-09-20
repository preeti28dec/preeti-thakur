import React from 'react'
import { MdPhoneIphone } from 'react-icons/md'
import { IoLocationSharp } from 'react-icons/io5'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { FaRegCalendarAlt } from 'react-icons/fa'

const DATA = [
  { icon: './svg/about_icon1.svg', titel: "Ui/Ux Design", disc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.", color: "bg-purple-50" },
  { icon: './svg/about_icon2.svg', titel: "App Development", disc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.", color: "bg-amber-50" },
  { icon: './svg/about_icon3.svg', titel: "Photography", disc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.", color: "bg-violet-50" },
  { icon: './svg/about_icon4.svg', titel: "Photography", disc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.", color: "bg-rose-50" },
  { icon: './svg/about_icon5.svg', titel: "Managment", disc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.", color: "bg-fuchsia-50" },
  { icon: './svg/about_icon6.svg', titel: "Web Development", disc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.", color: "bg-sky-50" }
]


function About() {
  return (
    <>
      <div className='mx-auto  container bg-white lg:rounded-2xl px-4 sm:px-5 md:px10 lg:px-10 mb-10'>
        <div className='py-8'>
          <div className='py-12 flex items-center gap-6'>
            <span className='text-4xl font-bold font-Roboto '>About Me</span>
              <div className='w-[20%] bg-gradient-to-r from-[#FA5252] to-[#DD2476]  rounded-[10px] h-0.5'></div>
          </div>
          <div className='lg:flex gap-14 '>
            <img className='w-[650px]  object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0' src="./about_image.jpg" alt="loding..." />
            <div className='md:mr-12 xl:mr-16'>
              <div className='text-4xl font-medium mb-2.5'>Who am i? </div>
              <p className='text-gray-500 leading-7'>I belong to Delhi and I graduated from Delhi University.             Interested in project implementation and process innovation.  Always willing to learn and execute new things.</p>
              {/* <p className='text-gray-500 leading-7 mt-2.5'>My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p> */}
              <div className=''>
                <div className='text-4xl font-medium my-5 '>Personal info</div>
                <div className=' '>
                  <div className='lg:flex  lg:gap-[15rem] '>
                    <div className='flex gap-4 '>
                      <div className=''><MdPhoneIphone className='shadow-xl  flex items-center justify-center rounded-md py-2 px-3 text-5xl w-12 text-pink-500 ' /></div>
                      <div>
                        <div className='text-[14px]'>Phone</div>
                        <div className='font-medium'>8130554490</div>
                      </div>
                    </div>
                    <div className='flex gap-4 my-2 '>
                      <div><IoLocationSharp className='shadow-xl  flex items-center justify-center rounded-md py-2 px-3 text-5xl w-12 text-orange-600 ' /></div>

                      <div>
                        <div className='text-[14px]'>Location</div>
                        <div className='font-medium'>New Delhi 1100065</div>
                      </div>
                    </div>

                  </div>
                  <div className='lg:flex  lg:gap-20 lg:mt-6 '>
                    <div className='flex gap-4 '>
                      <div><HiOutlineMailOpen className='shadow-xl  flex items-center justify-center rounded-md py-2 px-3 text-5xl w-12 text-teal-500 ' /></div>
                      <div>
                        <div className='text-[14px]'>Email</div>
                        <div className='font-medium'>preetithakur20@navgurukul.org</div>
                      </div>
                    </div>
                    <div className='flex gap-4 my-2'>
                      <div><FaRegCalendarAlt className='shadow-xl  flex items-center justify-center rounded-md py-2 px-3 text-5xl w-12 text-purple-400 ' /></div>
                      <div>
                        <div className='text-[14px]'>Birthday</div>
                        <div className='font-medium'>Dec 28, 2000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-[35px] font-medium pb-5'>What I do!</div>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 '>
          {DATA.map((items) => {
            return (
              <div key={items.titel} className={`${items.color} p-6 gap-6 flex lg:rounded-2xl  rounded-2xl`}>
                <img className={`${items.color} mb-24`} src={items.icon} alt={items.titel} />
                <div className='space-y-2'>
                  <div className='text-2xl font-semibold'>{items.titel}</div>
                  <div className='leading-8 text-gray-500'>{items.disc}</div>
                </div>
              </div>
            )
          })}
        </div>
        <div className='bg-sky-50 mt-10 py-10 px-12 rounded-xl max-w-full h-auto'>
          <div className='text-center text-3xl mb-10 font-semibold'>Clients</div>
          <div className='flex justify-between mx-auto images '>
            <img className='xl:w-[150px] sm:w-[100px]   w-[30px] mx-2' src="./about_logo1.png" alt="loding..." />
            <img className='xl:w-[150px] sm:w-[100px]   w-[30px] mx-2' src="./about_logo2.png" alt="loding..." />
            <img className='xl:w-[150px] sm:w-[100px]   w-[30px] mx-2' src="./about_logo3.png" alt="loding..." />
            <img className='xl:w-[150px] sm:w-[100px]   w-[30px] mx-2' src="./about_logo4.png" alt="loding..." />
            <img className='xl:w-[150px] sm:w-[100px]   w-[30px] mx-2' src="./about_logo5.png" alt="loding..." />
          </div>
        </div>
        <div className='text-center text-gray-400  pb-10 pt-6'>© 2022 All Rights Reserved by ib-themes.</div>
      </div>

    </>
  )
}

export default About

