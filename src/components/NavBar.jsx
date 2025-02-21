import React, { useEffect, useState } from 'react'

const NavBar = () => {

    const [bgColor, setBgColor] = useState("white");

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) {
            setBgColor("#fff");
        } else {
            setBgColor("#d0d0ce");
        }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div 
            style={{backgroundColor: bgColor}}
            className='flex justify-between w-full py-4 fixed top-0 left-0 px-3 md:px-6 lg:px-12'
        >
            <div className="road-rage-regular text-4xl flex items-end">TextPT <span className='relative bottom-2 block font-bold w-2 h-2 bg-[#1d4537] rounded-full'></span></div>
            <button className='text-[#1d4537] hover:text-gray-700 text-lg font-bold transition-all duration-500'>Explore</button>
        </div>
    )
}

export default NavBar