import About from '@/components/About/About'
import Github from '@/components/About/Github'
import TechStack from '@/components/About/TechStack'
import Tools from '@/components/About/Tools'
import React from 'react'

const page = () => {
  return (
    <div className="px-[10rem] text-white pt-[5rem] sm:pt-[7rem] sm:px-4">
      <About />
      <TechStack />
      <Tools />
      <Github />
    </div>
  )
}

export default page