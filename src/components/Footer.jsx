import React from 'react'

const Footer = () => {
  return (
    <section className='w-full bg-gradient-to-r from-yellow-50 to-teal-50 px-5 py-5 mt-12'>
        <div className='flex gap-5 justify-center'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="" className='w-[30px]'/>
            <img src="x.png" alt="" className='w-[30px]'/>
            <img src="linkdin.png" alt="" className='w-[30px]'/>
        </div>
<div className='text-xs text-center mt-5 text-[#929292]'>© 2024 Poetry Haven. All rights reserved.</div>
    </section>
  )
}

export default Footer