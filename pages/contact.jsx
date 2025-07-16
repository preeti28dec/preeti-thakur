
import Image from 'next/image';
import React from 'react'
const DATA = [
  { img: '/contact/contact_img1.png', titel: "Phone:", disc: "+452 666 386", disc2: " +452 666 386", color: "bg-purple-50" },
  { img: '/contact/contact_img2.png', titel: "Email:", disc: "support@gmail.com", disc2: "example@gmail.com", color: "bg-amber-50" },
  { img: '/contact/contact_img3.png', titel: "Address:", disc: "Maount View, Oval", disc2: "Road, New York, USA", color: "bg-violet-50" }
];

function Contact() {
  return (
    <>
      <div className='mx-auto  container bg-white lg:rounded-2xl px-4 sm:px-5 md:px10 lg:px-10 mb-10'>
        <div className='py-8'>
        <div className='py-12 flex items-center gap-6'>
            <span className='text-4xl font-bold font-Roboto '>Contact</span>
              <div className='w-[20%] bg-gradient-to-r from-[#FA5252] to-[#DD2476]  rounded-[10px] h-0.5'>
              </div>
          </div>
          <div className='lg:flex  gap-12 mx-auto'>
            <div className=''>
              {DATA.map((items) => {
                return (
                  <div key={items.titel} className={`${items.color} p-6 gap-6 mb-6  lg:rounded-2xl  rounded-2xl`}>
                    <div className='flex gap-6'>
                      <Image className={`${items.color} mb-6  `} src={items.img} alt={items.titel} height={30} width={60} />
                      <div>
                        <div className='text-2xl font-semibold'>{items.titel}</div>
                        <div className='leading-8 text-gray-500'>{items.disc}</div>
                        <div className='leading-8 text-gray-500'>{items.disc2}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className='w-full mt-8 lg:mt-0 lg:w-[60%] xl:w-[70%] bg-sky-50 rounded-2xl'>
              <div className='p-[48px] rounded-xl  '>
                <div className='text-2xl text-gray-500'>I am always open to discussing product</div>
                <div className='font-semibold text-2xl mt-2'> design work or partnerships.</div>
              </div>
              <div id="myForm" className='mx-12'>
                <div className="relative  z-0 w-full mt-[40px] mb-8 group">
                  <input type="text" name="name" className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none  focus:outline-none focus:ring-0 focus:border-[#FF6464] peer" />
                  <label  className=" absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Name *</label>
                </div>
                <div className="relative z-0 w-full mb-8 group">
                  <input type="email" name="user_email" className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none  focus:outline-none focus:ring-0 focus:border-[#5185D4] peer" placeholder=" " id="user_email" required="" />
                  <label  className=" absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email *</label>
                </div>
                <div className="relative z-0 w-full mb-8 group">
                  <input type="text" name="message" className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none  focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer" placeholder=" " id="message" required="" />
                  <label  className=" absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Message *</label>
                </div>
                <div className="transition-all duration-300  ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg  mt-3">
                  <input type="submit" className=" transition ease-in duration-200 font-semibold cursor-pointer border-color-910   hover:border-transparent px-6  py-2 rounded-lg border-[2px]  hover:text-white " value="Submit" />
                </div>
                <div className="Toastify">

                </div>
                <div className="Toastify">

                </div>
                </div>
            </div>
          </div>
        </div>
        <div className='text-center text-gray-400  pb-10 pt-6'>© 2022 All Rights Reserved by ib-themes.</div>
      </div>
    </>
  )
}

export default Contact

