import React from 'react'
import AboutCard from './AboutCard'
import Image from 'next/image'

const About = () => {
    return (
        <div className='flex gap-5 sm:flex-col'>
            <div>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }} className='text-white'>
                    Know Who <strong className="text-[#c770f0]">I'M</strong>
                </h1>
                <AboutCard />
            </div>
            <div>
                <Image height={100} width={500} src={"/about.png"}/>
            </div>
        </div>
    )
}

export default About