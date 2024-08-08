import React from 'react'
import Spline from "@splinetool/react-spline/next";
import { Circle, Plus } from "lucide-react";

type Props = {}

const Hero = (props: Props) => {
  return (
    <main className=' h-screen relative' >
        <Spline
        scene="https://prod.spline.design/nguqfvu5ex73VD0Q/scene.splinecode"
        className="w-screen h-screen absolute top-0 z-[1]"
      />
      <div className='relative z-[2]'>
      <nav className="absolute flex items-center top-0 w-full">
        <div className="flex items-center justify-between p-6 w-full">
          <span className="uppercase w-48 text-black text-xs">
            nano robotics is a visionary company
          </span>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <span className="uppercase text-black text-xs">Works</span>
          </div>

          <ul className="uppercase flex text-[10px] items-center">
            <li className="bg-black py-3 px-6 rounded-full cursor-pointer ">Company</li>
            <li className="border cursor-pointer hover:bg-black hover:text-white border-black text-black py-3 px-6 rounded-full">
              Robots
            </li>
            <li className="border cursor-pointer hover:bg-black hover:text-white border-black text-black py-3 px-6 rounded-full">
              Projects
            </li>
            <li className="bg-black rounded-full  cursor-pointer text-[20px] py-2 px-2 font-light ml-10">
              <Plus />
            </li>
          </ul>
        </div>
      </nav>
      <span className="text-[0.70rem] text-black uppercase absolute w-36 right-44 top-[32rem]">
        Collaborative Partnerships{" "}
      </span>
      <span className="text-[0.70rem] text-black uppercase absolute  w-60 left-44 top-[32rem]">
        revolutionize the way we interact with and maniipulate matter on a
        molecular level
      </span>
      <img
        src="https://i.ibb.co/cFz0FCx/funny-logo-removebg-preview.png"
        className="absolute left-16 top-[30.8rem]"
        alt="funny-logo-removebg-preview"
      ></img>
      <span className="text-4xl text-black uppercase absolute ml-6  w-60  top-[43rem]">
        +14k
      </span>
      <div className="text-black uppercase absolute ml-6 items-center space-x-10 top-[46rem] flex justify-between">
        <span className="text-[0.60rem]">Community</span>
        <div className="flex">
          <div className="bg-gray-400 w-8 h-8 rounded-full"></div>
          <div className="bg-gray-400 w-8 h-8 rounded-full"></div>
          <div className="bg-gray-400 w-8 h-8 rounded-full"></div>
        </div>
      </div>
      <span className="text-black text-[0.60rem] w-36 uppercase absolute right-56 space-x-10 top-[44rem]">
        Revolutionize the way we with and manipulate
      </span>
      <img
        src="https://i.ibb.co/QpKgLsy/arrow-r-removebg-preview.png"
        className="absolute right-20  top-[40rem]"
        alt="arrow-r-removebg-preview"
      ></img>
      </div>
    </main>
  )
}

export default Hero