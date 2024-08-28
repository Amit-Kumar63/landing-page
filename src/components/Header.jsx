import React from 'react'

const Header = () => {
  return (
    <nav className='w-full flex justify-between py-2 px-6 border-b border-solid border-[#d3d3d3]'>
        <img src="logo.jpeg" alt="logo" className='w-[70px] drop-shadow'/>
        <ul className='flex items-center gap-5 text-[16px] cursor-pointer'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Community</li>
        </ul>
        <div className='flex items-center gap-5'>
            <button className='py-2 px-5 bg-yellow-500 rounded text-white hover:rounded-full'>Login</button>
            <button className='py-2 px-4 rounded border border-solid border-yellow-500 hover:rounded-full'>Create Account</button>
        </div>
    </nav>
  )
}

export default Header