import React, { useEffect, useState } from 'react'
import Modal from './model-box';
const DATA = [
  { index: 1, img: './work/work_img1.jpg', title: "Ui/Ux", desc: "Chul urina", color: "bg-purple-50", detail:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",id: 1 },
  { index: 2, img: './work/work_img2.jpg', title: "Web Design", desc: "Chul urina", color: "bg-amber-50", detail:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",id: 2 },
  { index: 3, img: './work/work_img3.jpg', title: "Logo", desc: "Chul urina", color: "bg-violet-50", detail:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",id: 3 },
  { index: 4, img: './work/work_img4.jpg', title: "Video", desc: "Chul urina", color: "bg-rose-50", detail:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",id: 4 },
  { index: 5, img: './work/work_img5.jpg', title: "Ui/Ux", desc: "Chul urina", color: "bg-fuchsia-50", detail:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",id: 1 },
  { index: 6, img: './work/work_img6.jpg', title: "Video", desc: "Chul urina", color: "bg-sky-50", detail:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",id: 4 },
  { index: 7, img: './work/work_img7.jpg', title: "Ui/Ux", desc: "Chul urina", color: "bg-rose-50", detail:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",id: 1 },
  { index: 8, img: './work/work_img8.jpg', title: "Web Design", desc: "Chul urina", color: "bg-fuchsia-50", detail:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",id: 2 },
  { index: 9, img: './work/work_img9.jpg', title: "Logo", desc: "Chul urina", color: "bg-sky-50", detail:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",id: 3 }
]
function Works() {
  const [modalIndex, setModalIndex] = useState(-1);
  const [list, setList] = useState([]);
  const [activeTab, setActiveTab] = useState(-1);
  useEffect(() => {
    let tmp = [];
    if (activeTab === -1) {
      tmp = [...DATA];

    } else {
      tmp = DATA.filter(i => i.id === activeTab);
    }
    setList(tmp)
  }, [activeTab]);

  return (
    <>
      <div className='mx-auto  container bg-white lg:rounded-2xl px-4 sm:px-5 md:px10 lg:px-10 mb-10'>
        <div className='py-8'>
          <div className='py-12 flex items-center gap-6'>
            <span className='text-4xl font-bold font-Roboto '>Work</span>
            <div className='w-[20%] bg-gradient-to-r from-[#FA5252] to-[#DD2476]  rounded-[10px] h-0.5'>
            </div>
          </div>
          <div className='flex md:justify-end justify-start w-full flex-wrap font-medium gap-4 '>
            <button className='text-[#FA5252]' onClick={() => { setActiveTab(-1) }}>All</button>
            <button className='hover:text-[#FA5252]' onClick={() => { setActiveTab(4) }}>Video</button>
            <button className='hover:text-[#FA5252]' onClick={() => { setActiveTab(1) }}>Web Design</button>
            <button className='hover:text-[#FA5252]' onClick={() => { setActiveTab(3) }}>Logo</button>
            <button className='hover:text-[#FA5252]' onClick={() => { setActiveTab(2) }}>Graphic Design</button>
          </div>
          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-6'>
            {list.map((item, indx) => {
              return (
                <div key={indx} className={`${item.color} p-6  rounded-lg lg:rounded-2xl  `} onClick={() => { setModalIndex(indx) }} >
                  <div className='overflow-hidden rounded-lg'>
                    <img className= "w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" src={item.img} alt={item.title} />
                  </div>
                  <div className='font-normal text-gray-400 block pt-5 text-[14px]'>{item.title}</div>
                  <div className='font-medium text-xl duration-300 transition hover:text-[#FA5252] mt-2 leading-8 '>{item.desc}</div>
                </div>
              )
            })}
          </div>
          <Modal onClose={() => setModalIndex(-1)} show={modalIndex !== -1} {...list[modalIndex]} val={'work'}></Modal>
        </div>
        <div className='text-center text-gray-400  pb-10 pt-6'>© 2022 All Rights Reserved by ib-themes.</div>
      </div>

    </>
  )
}
export default Works