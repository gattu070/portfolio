import React from 'react';
import { AiOutlineDownCircle } from "react-icons/ai";
import { useState } from 'react';

export const ScrollBtn = () => {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    }

    const [visible, setVisible] = useState(true)

    const toggleScroll = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 0) {
            setVisible(false)
        }
        else if (scrolled <= 0) {
            setVisible(true)
        }
    }

    window.addEventListener('scroll', toggleScroll);

    return (
        <div className="animate__animated animate__fadeInTopRight scroll-btn fixed bottom-5 rounded-full right-[50px] left-auto flex justify-center items-center transition duration-300 text-blue-400 hover:text-blue-700 " onClick={scrollToBottom}>
            <AiOutlineDownCircle className={` animate-bounce text-5xl ${visible ? 'inline' : 'hidden'}`} />
        </div>
    )
}
