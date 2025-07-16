import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  FiUser,
  FiCode
} from "react-icons/fi";
import {
  BsBoxArrowUpRight
} from "react-icons/bs";
import {
  BiBasketball
} from "react-icons/bi";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaRegFileExcel,
} from "react-icons/fa";

const Modal = ({
  show,
  onClose,
  val,
  title,
  img,
  detail,
  project,
  langages,
  client,
  preview,
  blog_img,
  blog_date,
  blog_title,
  blog_desc,
  blog_detail,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-30 px-4 overflow-y-auto">
      <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-xl p-6 overflow-y-auto animate-fadeIn scale-100 transform transition-all duration-300">
        <div className="flex justify-end">
          <span
            onClick={handleCloseClick}
            className="border border-gray-700 rounded-full px-3 py-1 cursor-pointer"
          >
            X
          </span>
        </div>

        {val === "work" ? (
          <>
            <div className="text-center font-bold text-2xl sm:text-3xl text-[#ef4060]">{title}</div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6 text-sm sm:text-base">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FaRegFileExcel />
                  <div>Project:</div>
                  <div className="font-semibold">{project || "N/A"}</div>
                </div>
                <div className="flex items-center gap-2">
                  <FiCode />
                  <div>Languages:</div>
                  <div className="font-semibold">{langages || "N/A"}</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FiUser />
                  <div>Client:</div>
                  <div className="font-semibold">{client || "N/A"}</div>
                </div>
                <div className="flex items-center gap-2">
                  <BsBoxArrowUpRight />
                  <div>Preview:</div>
                  <div className="font-semibold text-blue-500">
                    <a
                      href={preview}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {preview
                        ? preview.length > 30
                          ? `${preview.slice(0, 30)}...`
                          : preview
                        : "N/A"}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-sm my-4">{detail}</div>

            <img
              className="w-full h-auto max-h-[400px] object-cover mt-6 mb-10 rounded-2xl"
              src={img}
              alt={title}
            />
          </>
        ) : (
          <>
            <div className="overflow-auto">
              <img
                className="w-full h-auto max-h-[400px] object-cover mt-6 mb-10 rounded-2xl"
                src={blog_img}
                alt={blog_title}
              />
              <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                <div>{blog_date}</div>
                <div>{blog_title}</div>
              </div>
              <div className="my-3 text-xl sm:text-2xl font-medium">{blog_desc}</div>
              <div className="text-sm my-4">
                <p>{blog_detail}</p>
              </div>

              {/* Comment */}
              <div className="rounded-lg mt-6 bg-gradient-to-r from-[#FA5252] to-[#DD2476] p-[1px]">
                <div className="bg-white flex flex-col sm:flex-row p-4 rounded-lg">
                  <div className="w-full sm:w-[124px] mb-3 sm:mb-0 rounded-xl">
                    <img src="./about_image.jpg" alt="profile" />
                  </div>
                  <div className="pl-0 sm:pl-5">
                    <div className="flex justify-between items-center">
                      <div className="text-[18px] sm:text-[22px] font-medium">
                        Reafia Ana
                      </div>
                      <div className="text-xs">15 min ago</div>
                    </div>
                    <div className="text-gray-600 text-sm mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <div className="text-xs text-[#FA5252] mt-1 cursor-pointer">
                      Reply
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center justify-start sm:justify-end space-x-4 mt-8">
                <div className="text-sm sm:text-base lg:text-lg font-medium">Login with:</div>
                <div className="flex gap-2 lg:gap-5">
                  <FaFacebookF className="text-3xl sm:text-4xl px-3 py-1 bg-gray-100 text-blue-600 rounded-xl hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] hover:text-white" />
                  <FaTwitter className="text-3xl sm:text-4xl px-3 py-1 bg-gray-100 text-sky-500 rounded-xl hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] hover:text-white" />
                  <BiBasketball className="text-3xl sm:text-4xl px-3 py-1 bg-gray-100 text-pink-500 rounded-xl hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] hover:text-white" />
                  <FaLinkedinIn className="text-3xl sm:text-4xl px-3 py-1 bg-gray-100 text-sky-600 rounded-xl hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] hover:text-white" />
                </div>
              </div>

              {/* Reply Box */}
              <div className="pt-3 pr-3 pb-4">
                <div className="text-xl sm:text-[25px] font-medium mb-2">Leave a Reply</div>
                <div className="mt-3 h-32 bg-gray-200 rounded"></div>
                <button className="bg-gradient-to-r from-[#FA5252] to-[#DD2476] px-6 sm:px-8 py-3 text-sm sm:text-lg text-white rounded-full mt-6">
                  Comment
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  ) : null;

  if (isMounted) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  }
  return null;
};

export default Modal;
