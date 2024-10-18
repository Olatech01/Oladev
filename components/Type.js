"use client"
import React, { useEffect, useState } from 'react'
import { Typed } from "react-typed";

const Type = () => {
    const words = ["Frontend Developer", "Backend Developer", "Freelancer"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const fullText = words[currentWordIndex];
            if (isDeleting) {
                setCurrentText((prev) => prev.slice(0, prev.length - 1));
                setSpeed(50);
            } else {
                setCurrentText((prev) => fullText.slice(0, prev.length + 1));
                setSpeed(150);
            }

            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, speed]);
    return (
        <div className="">
            <h1 className="text-4xl font-bold">
                Am a <span className="text-[#c770f0]">{currentText}</span>
                <span className="blinking-cursor">|</span>
            </h1>
        </div>
    )
}

export default Type