import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { TextContext } from '../context/TextContext'

const NavBar = () => {

    const navigate = useNavigate()
    const location = useLocation();
    const {clearChat} = useContext(TextContext)

    return (
        <div className='flex justify-between w-full py-4 fixed top-0 left-0 px-3 md:px-6 lg:px-12 bg-[#d0d0ce]'>
            <div onClick={() => navigate("/")} className="road-rage-regular text-4xl flex items-end cursor-pointer">TextPT <span className='relative bottom-2 block font-bold w-2 h-2 bg-[#1d4537] rounded-full'></span></div>
            
            {location.pathname === "/" && (
                <button 
                    onClick={() => navigate("/workspace")} 
                    className='text-[#1d4537] border border-[#1d4537] hover:bg-[#1d4537] hover:text-white px-6 text-lg font-semibold transition-all duration-500'
                >
                    Explore
                </button>
            )}
            
            {location.pathname === "/workspace" && (
                <div className="flex items-center gap-8">
                    <button 
                        onClick={() => navigate("/")} 
                        className='text-[#1d4537] text-lg font-semibold hover:text-gray-700 transition-all duration-500'
                    >
                        Home
                    </button>
                    <button 
                        onClick={clearChat} 
                        className='py-2 px-5 border rounded-full border-[#1d4537] hover:bg-[#1d4537] hover:text-white duration-500 transition-all ease-in-out'
                    >
                        Clear Chat
                    </button>
                </div>
            )}
        </div>
    )
}

export default NavBar