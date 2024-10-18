import React from 'react'
import { AiOutlineGithub } from "react-icons/ai"
import {
    SiVisualstudiocode,
    SiVercel,
} from "react-icons/si";


const Tools = () => {
    return (
        <div className='flex flex-col gap-3 items-center justify-center w-full'>
            <h1 className="text-[45px] font-bold">
                <strong className="text-[#c770f0]">Tools</strong> I use
            </h1>
            <div className='flex justify-between w-full'>
                <div className="tech-icons">
                    <SiVisualstudiocode />
                </div>
                <div className="tech-icons w-1/2">
                    <AiOutlineGithub />
                </div>
                <div className="tech-icons">
                    <SiVercel />
                </div>
            </div>
        </div>
    )
}

export default Tools