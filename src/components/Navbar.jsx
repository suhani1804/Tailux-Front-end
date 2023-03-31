import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import vectorSearch from "../assets/Vector.png";
import wishlist from "../assets/wislist.png";
import bag from "../assets/bag.png"
import profile from "../assets/profile.png"


export default function Navbar() {
  return (
    <div className="w-full">
      <nav className="bg-white w-full z-50 fixed insert-x-0 top-0 flex justify-center items-center  ml-auto border-2 shadow-md">
        <div className=" rounded-lg flex justify-center items-center ">
          <img
            src="src/assets/Logo.png"
            className="lg:mx-2 h-20 w-20 font-medium "
          />

          <div className=" hidden md:flex items-center justify-center gap-20 lg:px-10">
            <a
              href="#home"
              className=" text-lg text-black font-semibold hover:text-slate-700 cursor-pointer duration-100 ease-in-out"
            >
              MEN
            </a>
            <a
              href="#about"
              className="text-lg text-black font-semibold hover:text-slate-700 cursor-pointer duration-100 ease-in-out"
            >
              WOMEN
            </a>
            <a
              href="#projects"
              className="text-lg  text-black font-semibold hover:text-slate-700 cursor-pointer duration-100 ease-in-out"
            >
              KIDS
            </a>
            <a
              href="#contact"
              className="text-lg  text-black font-semibold hover:text-slate-700 cursor-pointer duration-100 ease-in-out"
            >
              Tailu
              <span className="text-lg  text-slate-600 font-semibold hover:text-slate-500 cursor-pointer duration-100 ease-in-out">
                X St
              </span>
              udio
            </a>
            {/* <a 
            href="#" className="w-full md:w-auto relative inline-flex items-center justify-center overflow-hidden text-base  text-black rounded-lg group bg-gradient-to-br from-purple-500 to-slate-300 group-hover:from-purple-900 group-hover:to-slate-600 hover:text-gray-800 hover:shadow-lg hover:shadow-slate-300/50 hover:dark:shadow-lg hover:dark:shadow-slate-800/80" >
            <span className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-100 rounded-md group-hover:bg-opacity-0">Download</span>
            </a> */}
          </div>

          <div className="flex  items-center justify-center w-[468px] h-10 px-4 mx-10 bg-slate-100 rounded-xl">
            <img src={vectorSearch} alt="" className="w-5 h-5 mx-6" />
            <input
              type="text"
              placeholder="Search for product, brand and more "
              className="bg-slate-100 w-[80%]"
            />
          </div>

          <div className=" mx-4">
            <div className="flex justify-center items-center gap-6">
              <img src={profile} className=" h-10 w-10 "></img>
              <img src={wishlist} className=" h-10 w-10 "></img>
              <img src={bag} className=" h-10 w-10 "></img>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
