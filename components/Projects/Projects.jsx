import React from 'react'
import ProjectsCards from './ProjectsCards'

const Projects = () => {
    return (
        <div className='flex flex-col gap-4 items-center justify-center w-full'>
            <div>
                <h1 className="text-[45px] font-bold">
                    My Recent <strong className="text-[#c770f0]">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
            </div>
            <div className='grid lg:grid-cols-3 gap-6 sm:grid-cols-1 w-full'>
                <ProjectsCards
                    imgPath={"/projects/leaf.png"}
                    isBlog={false}
                    title="Genie Pago"
                    description=""
                    ghLink=""
                    demoLink=""
                />
                <ProjectsCards
                    imgPath={"/projects/chatify.png"}
                    isBlog={false}
                    title="Dream Digital"
                    description=""
                    ghLink=""
                    demoLink=""
                />
                <ProjectsCards
                    imgPath={"/projects/blog.png"}
                    isBlog={false}
                    title="FreelanceHub"
                    description=""
                    ghLink=""
                    demoLink=""
                />
                <ProjectsCards
                    imgPath={"/projects/emotion.png"}
                    isBlog={false}
                    title="JobPilot"
                    description=""
                    ghLink=""
                    demoLink=""
                />
                <ProjectsCards
                    imgPath={"/projects/suicide.png"}
                    isBlog={false}
                    title="GiftedBrainz"
                    description=""
                    ghLink=""
                    demoLink=""
                />
                <ProjectsCards
                    imgPath={"/projects/leaf.png"}
                    isBlog={false}
                    title="Topx"
                    description=""
                    ghLink=""
                    demoLink=""
                />
            </div>
        </div >
    )
}

export default Projects