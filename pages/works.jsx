import React, { useEffect, useState } from 'react'

const DATA = [
  { img: './work/work_img1.jpg', title: "Ui/Ux", disc: "Chul urina", color: "bg-purple-50", id: 1 },
  { img: './work/work_img2.jpg', title: "Web Design", disc: "Chul urina", color: "bg-amber-50", id: 2 },
  { img: './work/work_img3.jpg', title: "Logo", disc: "Chul urina", color: "bg-violet-50", id: 3 },
  { img: './work/work_img4.jpg', title: "Video", disc: "Chul urina", color: "bg-rose-50", id: 4 },
  { img: './work/work_img5.jpg', title: "Ui/Ux", disc: "Chul urina", color: "bg-fuchsia-50", id: 1 },
  { img: './work/work_img6.jpg', title: "Video", disc: "Chul urina", color: "bg-sky-50", id: 4 },
  { img: './work/work_img7.jpg', title: "Ui/Ux", disc: "Chul urina", color: "bg-rose-50", id: 1 },
  { img: './work/work_img8.jpg', title: "Web Design", disc: "Chul urina", color: "bg-fuchsia-50", id: 2 },
  { img: './work/work_img9.jpg', title: "Logo", disc: "Chul urina", color: "bg-sky-50", id: 3 }
]
function Works() {
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
          <div className='flex md:justify-end justify-start w-full flex-wrap font-medium gap-4'>

            <button onClick={() => { setActiveTab(-1) }}>All</button>
            <button onClick={() => { setActiveTab(4) }}>Video</button>
            <button onClick={() => { setActiveTab(1) }}>Web Design</button>
            <button onClick={() => { setActiveTab(3) }}>Logo</button>
            <button onClick={() => { setActiveTab(2) }}>Graphic Design</button>
          </div>
          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-6'>
            {list.map((item, index) => {
              return (
                <div key={index} className={`${item.color} p-6 gap-6  lg:rounded-2xl  rounded-2xl`}>
                  <img className={`${item.color} mb-6 rounded-2xl`} src={item.img} alt={item.title} />
                  <div className='text-2xl font-semibold'>{item.title}</div>
                  <div className='leading-8 text-gray-500'>{item.disc}</div>
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
export default Works