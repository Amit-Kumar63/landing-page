import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Content = () => {
  return (
    <>
    <section className='w-full h-fit py-7 relative'>
        <img src="hero4.jpg" alt="hero" className='w-full h-auto'/>
        <div className="absolute inset-0 inset-y-7 bg-black opacity-[50%]"></div>
        <div className='self-start absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
            <h1 className='text-5xl font-bold text-white max-lg:text-3xl whitespace-nowrap max-sm:text-2xl max-[430px]:text-base'>Welcome to Poetry Haven, Inc.</h1>
            <p className='text-center text-md text-[#ccc] opacity-[90%] max-[950px]:text-sm max-sm:text-xs whitespace-nowrap max-[430px]:text-[10px]'>Discover, Share, and Celebrate the Art of Poetry</p>
        </div>
    </section>
    <section>
      <div className='w-80 rounded flex items-center justify-center border border-solid border-[#d3d3d3] pr-3 mx-auto my-2'>
      <input type="search" placeholder='Search for your favorite poet...' className='w-full px-4 py-2  outline-none placeholder:text-sm border-r border-solid border-[#d3d3d3]'/>
      <IoSearchOutline className='text-[27px] h-full pl-2'/>
      </div>
    </section>
    <section className="bg-gray-100 py-12 px-4 text-center mt-9">
  <h2 className="text-2xl font-serif text-gray-800 mb-4 max-[535px]:text-xl ">
    Stay Updated with the Latest Poetry and Events
  </h2>
  <p className="text-lg text-gray-600 mb-6 max-[535px]:text-sm">
    Join our newsletter for exclusive content and updates.
  </p>
  <button className="bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-teal-600 transition-colors duration-300">
    Subscribe Now
  </button>
</section>
    </>
  )
}

export default Content