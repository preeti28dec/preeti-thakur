import React, { useEffect, useState } from "react";
import Modal from "./model-box";

const DATA = [
  {
    id: 1,
    img: "./work/work_img1.png",
    title: "Game",
    project: "Queen puzzle",
    desc: "Queen puzzle",
    color: "bg-purple-50",
    langages: "HTML,CSS,JavaScript,React",
    client: "Self",
    preview: "https://solve-queens-puzzle.vercel.app/",
    detail: "How to play: 1. Place exactly one queen in each row, column, and color region. 2. Tap once to place X, twice to place a queen. 3. Queens cannot touch each other, even diagonally.",
    category: "Game",
  },
  {
    id: 2,
    img: "./work/work_img2.png",
    title: "Web Design",
    project: "Flipkart",
    desc: "Flipkart",
    color: "bg-amber-50",
    langages: "HTML,CSS,JavaScript,React",
    client: "Self",
    preview: "https://flipkart-git-main-preeti28decs-projects.vercel.app/",
    detail: "Flipkart-inspired eCommerce website built using modern technologies like Next.js and Tailwind. Features product browsing, cart, and checkout.",
    category: "Web Design",
  },
];

const filterOptions = ["All", "Web Design", "Video", "Logo", "Game"];

function Works() {
  const [activeTab, setActiveTab] = useState("All");
  const [filtered, setFiltered] = useState(DATA);
  const [selectedWork, setSelectedWork] = useState(null);

  useEffect(() => {
    if (activeTab === "All") {
      setFiltered(DATA);
    } else {
      setFiltered(DATA.filter(item => item.category === activeTab));
    }
  }, [activeTab]);

  return (
    <div className="mx-auto container bg-white lg:rounded-2xl px-4 sm:px-5 md:px10 lg:px-10 mb-10">
      <div className="py-8">
        <div className="py-12 flex items-center gap-6">
          <span className="text-4xl font-bold font-Roboto">Work</span>
          <div className="w-[20%] bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-[10px] h-0.5"></div>
        </div>

        <div className="flex flex-wrap md:justify-end justify-start font-medium gap-4">
          {filterOptions.map(option => (
            <button
              key={option}
              className={`${activeTab === option ? "text-[#FA5252]" : "hover:text-[#FA5252]"}`}
              onClick={() => setActiveTab(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-6">
          {filtered.map((item, index) => (
            <div
              key={index}
              className={`${item.color} p-6 rounded-lg lg:rounded-2xl cursor-pointer`}
              onClick={() => setSelectedWork(item)}
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  className="w-full transition duration-200 transform hover:scale-110 rounded-lg"
                  src={item.img}
                  alt={item.title}
                />
              </div>
              <div className="font-normal text-gray-400 pt-5 text-[14px]">
                {item.title}
              </div>
              <div className="font-medium text-xl hover:text-[#FA5252] mt-2 leading-8">
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {selectedWork && (
          <Modal
            show={!!selectedWork}
            onClose={() => setSelectedWork(null)}
            {...selectedWork}
            val="work"
          />
        )}
      </div>
      <div className="text-center text-gray-400 pb-10 pt-6">
        © 2022 All Rights Reserved by ib-themes.
      </div>
    </div>
  );
}

export default Works;
