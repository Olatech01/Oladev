"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { TbMenu2, TbX } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Check if the user has scrolled
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ease-in-out ${isScrolled ? "shadow-md bg-black bg-opacity-30" : "bg-transparent"
                } ${isOpen ? "bg-[#1a1a1a]/70 backdrop-blur-lg" : "bg-transparent"}`}
        >
            <div className="flex justify-between items-center text-[#FFFFFF]">
                {/* Logo */}
                <Image height={60} width={60} src={"/logo.png"} alt="Logo" />

                {/* Desktop Menu */}
                <ul className="sm:hidden md:flex flex gap-4 items-center">
                    <Link href="/">
                        <li className="flex items-center gap-2 cursor-pointer">
                            <AiOutlineHome />
                            Home
                        </li>
                    </Link>
                    <Link href="/about">
                        <li className="flex items-center gap-2 cursor-pointer">
                            <AiOutlineUser />
                            About
                        </li>
                    </Link>
                    <Link href="/projects">
                        <li className="flex items-center gap-2 cursor-pointer">
                            <AiOutlineFundProjectionScreen />
                            Projects
                        </li>
                    </Link>
                    <li aria-disabled className="flex items-center gap-2 cursor-pointer">
                        <CgFileDocument />
                        Resume
                    </li>
                </ul>

                <div className="md:hidden hidden sm:block">
                    <button onClick={toggleMenu} className="text-2xl">
                        {isOpen ? <TbX /> : <TbMenu2 />}
                    </button>
                </div>
            </div>

            <ul
                className={`absolute top-16 left-0 w-full bg-[#1a1a1a] text-center flex flex-col items-center gap-6 py-4 md:hidden transition-all duration-300 ease-in-out ${isOpen
                    ? "opacity-100 translate-y-0 bg-[#1a1a1a]/70 text-white backdrop-blur-lg"
                    : "opacity-0 -translate-y-full pointer-events-none"
                    }`}
            >
                <Link href="/" onClick={toggleMenu}>
                    <li className="flex items-center gap-2">
                        <AiOutlineHome />
                        Home
                    </li>
                </Link>
                <Link href="/about" onClick={toggleMenu}>
                    <li className="flex items-center gap-2">
                        <AiOutlineUser />
                        About
                    </li>
                </Link>
                <Link href="/projects" onClick={toggleMenu}>
                    <li className="flex items-center gap-2">
                        <AiOutlineFundProjectionScreen />
                        Projects
                    </li>
                </Link>
                <li className="flex items-center gap-2">
                    <CgFileDocument />
                    Resume
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
