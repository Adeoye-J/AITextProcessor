import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate()

    return (
        <div className='flex justify-between w-full py-4 fixed top-0 left-0 px-3 md:px-6 lg:px-12 bg-[#d0d0ce]'>
            <div onClick={() => navigate("/")} className="road-rage-regular text-4xl flex items-end cursor-pointer">TextPT <span className='relative bottom-2 block font-bold w-2 h-2 bg-[#1d4537] rounded-full'></span></div>
            <button className='text-[#1d4537] border border-[#1d4537] hover:bg-[#1d4537] hover:text-white px-6 text-lg font-semibold transition-all duration-500'>Explore</button>
        </div>
    )
}

export default NavBar