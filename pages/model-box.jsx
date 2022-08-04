import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import { FiUser, FiCode } from 'react-icons/fi'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { BiBasketball } from 'react-icons/bi'
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaRegFileExcel } from 'react-icons/fa';

const Modal = ({ show, onClose, title, img, detail, desc, blog_date, blog_img, blog_title, blog_detail, blog_desc, val }) => {
  const [isWorks, setIsWorks] = useState(false);
  const [shows, setShows] = useState(val)
  console.log(img, title, desc)
  useEffect(() => {
    setIsWorks(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };
  console.log('value---', shows)
  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalBody>
          <span onClick={handleCloseClick} className="border border-gray-700 rounded-full px-3 py-1">X</span>
          {shows === 'work' ?
            <>  <div className="text-center font-bold text-3xl text-[#ef4060]">{title}</div>
              <div className="grid grid-cols-1 lg:grid-cols-2 my-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div><FaRegFileExcel /></div>
                    <div>Project:</div>
                    <div className="font-semibold">{"Website"}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div><FiCode /></div>
                    <div>Langages:</div>
                    <div className="font-semibold">{"HTML,CSS,Javascrit"}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div><FiUser /></div>
                    <div>Client:</div>
                    <div className="font-semibold">{"ThemeForest"}</div>
                  </div>
                  <div className="flex items-center  gap-2">
                    <div><BsBoxArrowUpRight /></div>
                    <div>Preview:</div>
                    <div className="font-semibold">{"ThemeForest.net"}</div>
                  </div>
                </div>
              </div>
              <div className="text-sm my-4">{detail}</div>
              <img className="w-full h-auto md:h-[400px] mt-6 mb-10 rounded-2xl" src={img} alt={title} />
            </>
            :
            <>
              <div className="overflow-auto ">
                <img className="w-full h-auto md:h-[400px] mt-6 mb-10 rounded-2xl " src={blog_img} alt={blog_title} />
                <div className="flex gap-3 text-sm text-gray-400">
                  <div>{blog_date} </div>
                  <div>{blog_title}</div>
                </div>
                <div className="my-3 text-2xl font-medium">{blog_desc}</div>
                <div className="text-sm my-4">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
                    magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis
                    doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.
                  </p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim
                    corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
                    magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur.
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis
                    doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.
                  </p>
                </div>
                <div className="rounded-lg mt-6 bg-gradient-to-r from-[#FA5252] to-[#DD2476] p-[1px] mr-3">
                  <div className=" bg-[#ffffff]   flex  p-4 rounded-lg  ">
                    <div className="md:w-[124px] rounded-xl">
                      <img src="./about_image.jpg" alt="profile image" />
                    </div>
                    <div className="pl-5">
                      <div className="flex justify-between items-center">
                        <div className="text-[22px] font-medium">
                          Reafia Ana
                        </div>
                        <div className=" text-tiny "> 15 min ago</div>
                      </div>
                      <div className="md:pr-16">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nam ad, unde vel aut soluta atque consequatur. Omnis, debitis nihil?
                      </div>
                      <div className="text-tiny hover:text-[#FA5252] ">Reply</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center md:justify-end space-x-4 mt-8 mr-3">
                  <div className="text-[16px]  lg:text-[20px]">Login with: </div>
                  <div className="flex gap-2 lg:gap-5">
                    <div className='text-5xl'><FaFacebookF className='px-4 bg-gray-100 hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef]  hover:text-white  text-blue-600 rounded-xl' /></div>
                    <div className='text-5xl'><FaTwitter className='  px-4 bg-gray-100  text-sky-500 rounded-xl hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef]  hover:text-white ' /></div>
                    <div className='text-5xl'><BiBasketball className='px-4 bg-gray-100  text-pink-500 rounded-xl hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef]  hover:text-white ' /></div>
                    <div className='text-5xl'><FaLinkedinIn className='px-4 bg-gray-100  text-sky-600 rounded-xl hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef]  hover:text-white ' /></div>
                  </div>
                </div>
                <div className="pt-3">
                  <div className="pr-3 pb-4">
                    <div className="w-full ">
                      <div className="block mb-2">
                        <div className="text-[25px] font-medium">
                          Leave A reply
                        </div>
                        <div className=" mt-3 p-14  rounded  bg-gray-200  "> </div>
                        <button className="flex items-center  bg-gradient-to-r from-[#FA5252] to-[#DD2476]  px-8 py-[12px] text-lg text-white rounded-[35px] mt-8"> Comment </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </>}
        </StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isWorks) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
  padding-top: 10px;
`;


const fade = keyframes`
  from {
    opacity: 0.2;
    transform: scale(.9)  translateY(80px);
  }
  
  to {
    opacity: 1;
    transform: scale(1) translateY(0px);
  }
`;



const StyledModal = styled.div`
  background: white;
  width: 850px;
  height: 750px;
  border-radius: 15px;
  padding: 1.5rem;
  animation: ${fade} .4s linear;
  overflow-y: auto;
`;
const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);

`;

export default Modal;