import React from 'react'
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <div>
      <blockquote className="blockquote mb-0 flex flex-col gap-2">
        <p className='font-semibold'>
          Hi Everyone, I am <span className="text-[#c770f0]">Mustapha Suleiman </span>
          from <span className="text-[#c770f0]">Nigeria.</span>
          <br />
          <br />
          Additionally, I am currently employed as a Frontend Developer at
          Toshconsult Technologies Inc.
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul className='px-2 flex flex-col gap-3'>
          <li className="flex items-center gap-2">
            <ImPointRight /> Researching
          </li>
          <li className="flex items-center gap-2">
            <ImPointRight /> Writing Tech Blogs
          </li>
          <li className="flex items-center gap-2">
            <ImPointRight /> Travelling
          </li>
        </ul>

        <p style={{ color: "rgb(155 126 172)" }}>
          "Strive to build things that make a difference!"{" "}
        </p>
        <footer className="blockquote-footer">Mustapha</footer>
      </blockquote>
    </div>
  )
}

export default AboutCard