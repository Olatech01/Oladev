"use client"
import React, { useState } from 'react'
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import Image from 'next/image';


const Navbar = () => {
    
  return (
    <nav className='flex justify-between text-[#FFFFFF] px-10'>
        <Image height={100} width={100} src={"/logo.png"}/>
        <ul className='flex gap-4'>
            <li className='flex items-center gap-2'>
                <AiOutlineHome />
                Home
            </li>
            <li className='flex items-center gap-2'>
                <AiOutlineUser />
                Home
            </li>
            <li className='flex items-center gap-2'>
                <AiOutlineFundProjectionScreen />
                Projects
            </li>
            <li className='flex items-center gap-2'>
                <CgFileDocument />
                Resume
            </li>
        </ul>
    </nav>
  )
}

export default Navbar