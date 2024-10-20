import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
        <h2 className='font-bold text-[45px] sm:text-[25px] text-white'>Hire Me</h2>
        <form action="" className='lg:w-[50%] flex flex-col gap-2 sm:w-full'>
            <div className='w-full flex flex-col gap-1'>
                <label htmlFor="" className='text-[16px] font-semibold text-white'>Name</label>
                <input type="text" 
                placeholder='Enter your name'
                className='bg-transparent h-[40px] px-2 text-white rounded-md outline-[#c770f0] border border-[#c770f0]'/>
            </div>
            <div className='w-full flex flex-col gap-1'>
                <label className='text-[16px] font-semibold text-white'>Email</label>
                <input type="email" 
                placeholder='Enter your email address'
                className='bg-transparent h-[40px] text-white px-2 rounded-md outline-[#c770f0] border border-[#c770f0]'/>
            </div>
            <div className='w-full flex flex-col gap-1'>
                <label htmlFor="" className='text-[16px] font-semibold text-white'>Message</label>
                <textarea name="" id="" 
                placeholder='Enter your message'
                className='bg-transparent h-[20vh] px-2 text-white rounded-md outline-[#c770f0] border border-[#c770f0]'></textarea>
            </div>
            <button className='bg-[#c770f0] h-[40px] rounded-md text-[16px] font-semibold text-white'>Submit</button>
        </form>
    </div>
  )
}

export default Contact