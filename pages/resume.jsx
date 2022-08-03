import React from 'react'
import { FaAward, FaGraduationCap } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

const DATA = [
  {
    name: 'Education',
    icon: <FaGraduationCap />,
    items: [
      { date: '2021-2023', title: "Ph.D in Horriblensess", disc: "ABC University, Los Angeles, CA", color: "bg-rose-50" },
      { date: '2021-2023', title: "Sr. Software Testery", disc: "AGoogle Inc.", color: "bg-pink-50" },
      { date: '2021-2023', title: "Best Developerr", disc: "University Of Melbourne, NA", color: "bg-rose-50" }
    ]
  },
  {
    name: 'Experience',
    icon: <MdWork />,
    items:
      [
        { date: '2021-2023', title: "Computer Science", disc: "Imperialize Technical Institute", color: "bg-sky-50" },
        { date: '2021-2023', title: "Cr. Web Developer", disc: "ib-themes ltd.", color: "bg-purple-50" },
        { date: '2021-2023', title: "Best Writter", disc: "Online Typodev Soluation Ltd.", color: "bg-sky-50" }
      ]
  },

  {
    name: 'Awards',
    icon: <FaAward />,
    items:
      [
        { date: '2021-2023', title: "Graphic Designer", disc: "Web Graphy, Los Angeles, CA", color: "bg-violet-50" },
        { date: '2021-2023', title: "Jr. Web Developer", disc: "Creative Gigs.", color: "bg-amber-50" },
        { date: '2021-2023', title: "Best Freelancer", disc: "Fiver & Upwork Level 2 & Top Rated", color: "bg-fuchsia-50" },
      ]
  }
]

function Resume() {
  return (
    <>
      <div className='mx-auto  container bg-white lg:rounded-2xl px-4 sm:px-5 md:px10 lg:px-10 mb-10'>
        <div className='py-8'>
        <div className='py-12 flex items-center gap-6'>
            <span className='text-4xl font-bold font-Roboto '>Resume</span>
              <div className='w-[20%] bg-gradient-to-r from-[#FA5252] to-[#DD2476]  rounded-[10px] h-0.5'>
              </div>
          </div>
          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 '>
            {DATA.map((i) => {
              return (
                <>
                  <div key={i.name}>
                    <div className='flex gap-2 items-center mx-2'>
                      <div className='text-red-400 text-2xl '>{i.icon}</div>
                      <div className='text-3xl'>{i.name}</div>
                    </div>
                    <div>
                      {i.items.map((itm) => {
                        return (
                          <div key={itm.title} className={`${itm.color} p-6 gap-6  lg:rounded-2xl  rounded-2xl my-4`}>
                            <div className='py-2 text-gray-500'>{itm.date}</div>
                            <div className='space-y-2'>
                              <div className='text-2xl '>{itm.title}</div>
                              <div className='leading-8 '>{itm.disc}</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
        <div className='bg-sky-50 py-12 px-4 sm:px-5 md:px-10 lg:px20'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='cols-span-1'>
              <div className='text-3xl font-medium mb-6'>Working Skills</div>
              <div className='mb-7'>
                <div className='flex justify-between py-1'>
                  <div className='text-base text-gray-600 font-semibold'>Web Design</div>
                  <div className='text-base font-semibold text-gray-600 pr-5'>80%</div>
                </div>
                <div className='onee mr-2  relative bg-gray-200 rounded-[10px] h-2'>
                  <div className='twoo absolute top-0 w-[80%] bg-red-400 rounded-[10px] h-2'>
                  </div>
                </div>
              </div>
              <div className='mb-7'>
                <div className='flex justify-between py-1'>
                  <div className='text-base text-gray-600 font-semibold'>Mobile App</div>
                  <div className='text-base font-semibold text-gray-600 pr-5'>95%</div>
                </div>
                <div className='onee mr-2  relative bg-gray-200 rounded-[10px] h-2'>
                  <div className='twoo absolute top-0 w-[95%] bg-purple-700 rounded-[10px] h-2'>
                  </div>
                </div>
              </div>
              <div className='mb-7'>
                <div className='flex justify-between py-1'>
                  <div className='text-base text-gray-600 font-semibold'>illustrator</div>
                  <div className='text-base font-semibold text-gray-600 pr-5'>65%</div>
                </div>
                <div className='onee mr-2  relative bg-gray-200 rounded-[10px] h-2'>
                  <div className='twoo absolute top-0 w-[65%] bg-blue-700 rounded-[10px] h-2'>
                  </div>
                </div>
              </div>
              <div className='mb-7'>
                <div className='flex justify-between py-1'>
                  <div className='text-base text-gray-600 font-semibold'>Photoshope</div>
                  <div className='text-base font-semibold text-gray-600 pr-5'>75%</div>
                </div>
                <div className='onee mr-2  relative bg-gray-200 rounded-[10px] h-2'>
                  <div className='twoo absolute top-0 w-[75%] bg-fuchsia-500 rounded-[10px] h-2'>
                  </div>
                </div>
              </div>
            </div>
            <div className='cols-span-1'>
              <div className='text-3xl font-medium mb-8'>Knowledges</div>
              <div className='flex gap-3 gap-y-3 md:gap-y-6 sm:gap-x-4 flex-wrap'>
                <div className='p-4 text-gray-500 bg-sky-100 rounded-2xl'>Digital Des</div>
                <div className='p-4 text-gray-500 bg-sky-100 rounded-2xl'>Marketing</div>
                <div className='p-4 text-gray-500 bg-sky-100 rounded-2xl'>Social Media</div>
                <div className='p-4 text-gray-500 bg-sky-100 rounded-2xl'>Print</div>
                <div className='p-4 text-gray-500 bg-sky-100 rounded-2xl'>Time Management</div>
                <div className='p-4 text-gray-500 bg-sky-100 rounded-2xl'>Flexibility</div>
                <div className='p-4 text-gray-500 bg-sky-100 rounded-2xl'>Print</div>
                <div className='p-4 text-gray-500 bg-sky-100 rounded-2xl'>Print</div>
                <div className='p-4 text-gray-500 bg-sky-100 rounded-2xl'>Time Management</div>
                <div className='p-4 text-gray-500 bg-sky-100 rounded-2xl'>Flexibility</div>
                <div className='p-4 text-gray-500 bg-sky-100 rounded-2xl'>Print</div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center text-gray-400  pb-10 pt-6'>© 2022 All Rights Reserved by ib-themes.</div>
      </div>
    
    </>
  )
}

export default Resume




