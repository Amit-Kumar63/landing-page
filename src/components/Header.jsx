import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <nav className='w-full flex items-center justify-between py-2 px-6 border-b border-solid border-[#d3d3d3] max-[950px]:px-3'>
        <img src="logo.jpeg" alt="logo" className='w-[70px] drop-shadow'/>
        <ul className='flex items-center gap-5 text-[16px] cursor-pointer max-[950px]:hidden'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Community</li>
        </ul>
        <div className='flex items-center gap-5 max-[950px]:hidden'>
            <button className='py-2 px-5 bg-yellow-500 rounded text-white hover:rounded-full'>Login</button>
            <button className='py-2 px-4 rounded border border-solid border-yellow-500 hover:rounded-full'>Create Account</button>
        </div>
        <GiHamburgerMenu className='text-[30px] cursor-pointer hidden max-[950px]:block'/>
    </nav>
  )
}

export default Header