import Image from 'next/image'
import React from 'react'
import Type from './Type'

const Hero = () => {
    return (
        <div className="home-section flex flex-col gap-[5rem]">
            <div className='flex home-content justify-between items-center pt-[5rem] sm:pt-[7rem] sm:flex-col'>
                <div className='w-full'>
                    <h1 style={{ paddingBottom: 15 }} className="heading">
                        Hi There!{" "}
                        <span className="wave" role="img" aria-labelledby="wave">
                            👋🏻
                        </span>
                    </h1>

                    <h1 className="heading-name">
                        I'M
                        <strong className="main-name"> SULEIMAN MUSTAPHA</strong>
                    </h1>
                    <Type />
                </div>
                <div className=''>
                    <Image height={100} width={700} src={"/home-main.svg"} className='w-full' />
                </div>
            </div>
            <div className='flex gap-[2rem] sm:flex-col sm:items-center'>
                <div className='w-full text-[whitesmoke] flex flex-col gap-2'>
                    <h1 className='font-bold text-[40px] sm:text-[25px]'>
                        LET ME <span className="text-[#c770f0]"> INTRODUCE </span> MYSELF
                    </h1>
                    <p className="home-about-body">
                        I fell in love with programming and I have at least learnt
                        something, I think… 🤷‍♂️
                        <br />
                        <br />I am fluent in classics like
                        <i>
                            <b className="text-[#c770f0]"> Html, Css, Javascript and React.js. </b>
                        </i>
                        <br />
                        <br />
                        My field of Interest's are building new &nbsp;
                        <i>
                            <b className="text-[#c770f0]">Web Technologies and Products </b> and
                            also in areas related to{" "}
                            <b className="text-[#c770f0]">
                                Blockchain.
                            </b>
                        </i>
                        <br />
                        <br />
                        Whenever possible, I also apply my passion for developing products
                        with <b className="text-[#c770f0]">Node.js</b> and
                        <i>
                            <b className="text-[#c770f0]">
                                {" "}
                                Modern Javascript Library and Frameworks
                            </b>
                        </i>
                        &nbsp; like
                        <i>
                            <b className="text-[#c770f0]"> React.js and Next.js</b>
                        </i>
                    </p>
                </div>
                <div className=''>
                    <Image height={100} width={300} src={"/avatar.svg"}/>
                </div>
            </div>
        </div>
    )
}

export default Hero