import React from 'react'
const DATA = [
  { img: './blog/blog_img1.jpg', titel: "Ui/Ux ", disc: "Chul urina", color: "bg-purple-50" },
  { img: './blog/blog_img2.jpg', titel: "Web Design", disc: "Chul urina", color: "bg-amber-50" },
  { img: './blog/blog_img3.jpg', titel: "Logo", disc: "Chul urina", color: "bg-violet-50" },
  { img: './blog/blog_img4.jpg', titel: "Video", disc: "Chul urina", color: "bg-rose-50" },
  { img: './blog/blog_img5.jpg', titel: "UI/UX", disc: "Chul urina", color: "bg-fuchsia-50" },
  { img: './blog/blog_img6.jpg', titel: "Video", disc: "Chul urina", color: "bg-sky-50" }
]
function Blogs() {
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
          {DATA.map((items) => {
            return (
              <div key={items.titel} className={`${items.color} p-6 gap-6  lg:rounded-2xl  rounded-2xl`}>
                <img className={`${items.color} mb-6 rounded-2xl`} src={items.img} alt={items.titel} />

                <div className='text-2xl font-semibold'>{items.titel}</div>
                <div className='leading-8 text-gray-500'>{items.disc}</div>

              </div>
            )
          })}
        </div>
      </div>
      <div className='text-center text-gray-400  pb-10 pt-6'>© 2022 All Rights Reserved by ib-themes.</div>
    </div>
  </>
  )
}

export default Blogs
