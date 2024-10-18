import Link from 'next/link';
import React from 'react'
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div className='flex items-center justify-between footer px-5 mt-8'>
            <h3 className='text-white font-semibold'>Designed and Developed by Olatech</h3>
            <h3 className='text-white font-semibold'>Copyright © {year} OT</h3>
            <div className="flex justify-center items-center gap-2 text-white">
                <Link href="https://github.com/mustapha-mboye" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub size={32} />
                </Link>
                <Link href="https://twitter.com/mustapha_mboye" target="_blank" rel="noopener noreferrer">
                    <AiOutlineTwitter size={32} />
                </Link>
                <Link href="https://www.instagram.com/mustapha_mboye/" target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram size={32} />
                </Link>
            </div>
        </div>
    )
}

export default Footer