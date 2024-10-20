import React from 'react'
import { AiOutlineHtml5 } from "react-icons/ai"
import { IoLogoCss3 } from "react-icons/io"
import { SiBootstrap } from "react-icons/si"
import {
    DiJavascript1,
    DiReact,
} from "react-icons/di";


const TechStack = () => {
    return (
        <div className='flex flex-col gap-3 items-center justify-center w-full'>
            <h1 className="text-[45px] font-bold">
                Professional <strong className="text-[#c770f0]">Skillset </strong>
            </h1>
            <div className='flex justify-between w-full sm:grid sm:grid-cols-2 sm:gap-2'>
                <p className="tech-icons">
                    <DiJavascript1 />
                </p>
                <p className="tech-icons">
                    <DiReact />
                </p>
                <p className="tech-icons">
                    <AiOutlineHtml5 />
                </p>

                <p className="tech-icons">
                    <IoLogoCss3 />
                </p>
                <p className="tech-icons">
                    <SiBootstrap />
                </p>

            </div>
        </div>
    )
}

export default TechStack