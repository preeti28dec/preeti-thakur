import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  FaDownload,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

function Homepage() {
  return (
    <div className="sm:h-auto h-[100vh] flex flex-col items-center justify-center p-6 text-center">
      <Head>
        <title>Resume Website</title>
        <link rel="icon" href="/favicon-icon.ico" />
      </Head>

      <img
        src="https://i.ibb.co/QX3kP99/IMG-Sun-Jan-29-22-32-25-GMT05-30-2023.jpg"
        alt="Profile"
        className="rounded-full w-48 h-48 lg:w-72 lg:h-72 object-cover mb-6"
      />

      <h1 className="text-3xl lg:text-5xl font-semibold font-Poppins">Preeti Thakur</h1>
      <p className="text-[#7B7B7B] my-2">Front-end Developer</p>

      <div className="flex gap-4 mt-4">
        <Link href="https://www.facebook.com/officialpreetithakur/" target="_blank">
          <FaFacebookF className="text-4xl bg-white text-blue-600 p-2 rounded-xl hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] hover:text-white" />
        </Link>
        <Link href="https://twitter.com/impreetithakur" target="_blank">
          <FaTwitter className="text-4xl bg-white text-sky-500 p-2 rounded-xl hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] hover:text-white" />
        </Link>
        <Link href="https://github.com/preeti28dec" target="_blank">
          <AiFillGithub className="text-4xl bg-white p-2 rounded-xl hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] hover:text-white" />
        </Link>
        <Link href="https://www.linkedin.com/in/preeti-thakur-189548212" target="_blank">
          <FaLinkedinIn className="text-4xl bg-white text-sky-600 p-2 rounded-xl hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] hover:text-white" />
        </Link>
      </div>

      <a
        href="/file/Preeti-thakur.pdf"
        target="_blank"
        download
        className="mt-6 inline-flex items-center gap-3 bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-white px-6 py-3 rounded-full hover:scale-105 transition"
      >
        <FaDownload className="text-xl" />
        <span className="text-lg font-medium">Download CV</span>
      </a>
    </div>
  );
}

export default Homepage;
