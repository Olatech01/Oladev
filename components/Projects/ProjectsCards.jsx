import Image from 'next/image'
import React from 'react'
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Link from 'next/link';


const ProjectsCards = (props) => {
    return (
        <div className='project-card-view flex flex-col gap-3 items-center justify-center'>
            <Image height={100} width={200} src={props.imgPath} />
            <div className='flex flex-col items-center'>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <div className='flex items-center gap-4'>
                    <Link href={props.ghLink}>
                        <button className='flex items-center gap-2 bg-[#4c1a64] h-[30px] px-4 rounded-md'>
                            <BsGithub /> &nbsp;
                            {props.isBlog ? "Blog" : "Github"}
                        </button>
                    </Link>
                    <Link href={props.demoLink}>
                        <button className='flex items-center gap-2 bg-[#4c1a64] h-[30px] px-4 rounded-md'>
                            <CgWebsite /> &nbsp;
                            {props.isBlog ? "Blog" : "Demo"}
                        </button>
                    </Link>
                </div>
                {"\n"}
                {"\n"}


                {!props.isBlog && props.demoLink && (
                    <button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        style={{ marginLeft: "10px" }}
                    >
                        <CgWebsite /> &nbsp;
                        {"Demo"}
                    </button>
                )}
            </div>
        </div>
    )
}

export default ProjectsCards