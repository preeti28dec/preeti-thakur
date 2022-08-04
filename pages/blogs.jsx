import React, { useState } from 'react'
import Modal from './model-box'
const DATA = [
  { blog_img: './blog/blog_img1.jpg', blog_date: "17 April 2022", blog_title: "Inspiration", blog_desc: "How to Own Your Audience by Creating an Email List.", blog_detail:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure." ,blog_color: "bg-purple-50" },
  { blog_img: './blog/blog_img2.jpg', blog_date: "17 April 2022", blog_title: "Inspiration", blog_desc: "Everything You Need to Know About Web Accessibility.", blog_detail:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure." ,blog_color: "bg-amber-50" },
  { blog_img: './blog/blog_img3.jpg', blog_date: "17 April 2022", blog_title: "Inspiration", blog_desc: "The window know to say beside you", blog_detail:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure." ,blog_color: "bg-violet-50" },
  { blog_img: './blog/blog_img4.jpg', blog_date: "17 April 2022", blog_title: "Inspiration", blog_desc: "Top 10 Toolkits for Deep Learning in 2021.", blog_detail:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure." ,blog_color: "bg-rose-50" },
  { blog_img: './blog/blog_img5.jpg', blog_date: "17 April 2022", blog_title: "Inspiration", blog_desc: "How to Own Your Audience by Creating an Email List.", blog_detail:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure." ,blog_color: "bg-fuchsia-50" },
  { blog_img: './blog/blog_img6.jpg', blog_date: "17 April 2022", blog_title: "Inspiration", blog_desc: "Everything You Need to Know About Web Accessibility.", blog_detail:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure." ,blog_color: "bg-sky-50" }
]
function Blogs() {
  const [modalIndex, setModalIndex] = useState(-1);
  return (
    <>
      <div className='mx-auto  container bg-white lg:rounded-2xl px-4 sm:px-5 md:px10 lg:px-10 mb-10'>
        <div className='py-8'>
          <div className='py-12 flex items-center gap-6'>
            <span className='text-4xl font-bold font-Roboto '>Blog</span>
            <div className='w-[20%] bg-gradient-to-r from-[#FA5252] to-[#DD2476]  rounded-[10px] h-0.5'>
            </div>
          </div>
          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-6'>
            {DATA.map((items,indx) => {
              return (
                <div key={indx} className={`${items.blog_color} p-6 gap-6  lg:rounded-2xl  rounded-2xl`} onClick={() => { setModalIndex(indx) }}>
                  <div className='overflow-hidden rounded-lg'>
                    <img className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" src={items.blog_img} alt={items.blog_title} />
                  </div>
                  <div className='flex gap-3 my-3'>
                    <div>{items.blog_date}</div>
                    <div className=''>{items.blog_title}</div>
                  </div>
                  <div className='leading-8 text-gray-500'>{items.blog_desc}</div>
                </div>
              )
            })}
          </div>
          <Modal onClose={() => setModalIndex(-1)} show={modalIndex !== -1} {...DATA[modalIndex]} val={'blog'}></Modal>
        </div>
        <div className='text-center text-gray-400  pb-10 pt-6'>© 2022 All Rights Reserved by ib-themes.</div>
      </div>
    </>
  )
}

export default Blogs
