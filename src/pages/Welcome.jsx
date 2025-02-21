import React from 'react'
import bgai from "/bgai.jpg"
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {

    const navigate = useNavigate()

    return (
        <div className='min-h-screen bg-[#d0d0ce] flex items-center justify-center m-auto px-3 md:px-6 lg:px-12'>
            <div className="flex flex-col gap-3 items-center">
                {/* <NavBar /> */}

                <div className="flex flex-col sm:flex-row items-center pt-24 sm:pt-0">
                    <div className="flex-1 flex flex-col items-start gap-5">
                        <h2 className='text-3xl sm:text-5xl lg:text-7xl font-bold baskervville-regular'>Enhance Your Text Experience</h2>
                        <p className='italic text-base sm:text-lg font-extrabold baskervville-regular-italic text-gray-600'>Try out our language detection, summarization and translation features to make your text processing easier and more efficient.</p>
                        <button onClick={() => navigate("/workspace")} className='border border-[#1d4537] bg-[#1d4537] text-white py-3 px-10 font-semibold hover:text-[#1d4537] hover:bg-[#d0d0ce] transition-all duration-500 ease-in-out'>Get Started</button>
                    </div>
                    <img src={bgai} alt="" className='flex-1 w-[400px] sm:w-[300px]' />
                </div>
            </div>
        </div>
    )
}

export default Welcome