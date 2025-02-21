import React from 'react'
import bgai from "/bgai.jpg"
import NavBar from '../components/NavBar'
import { motion } from 'framer-motion'

const Welcome = () => {

    return (
        <div className='min-h-screen bg-[#d0d0ce] flex items-center justify-center m-auto px-3 md:px-6 lg:px-12'>
            <div className="flex flex-col gap-3 items-center">
                <NavBar />

                {/* <div className="flex flex-col sm:flex-row items-center pt-24 sm:pt-0">
                    <div className="flex-1 flex flex-col items-start gap-5">
                        <h2 className='text-3xl sm:text-5xl lg:text-7xl font-semibold baskervville-regular'>Enhance Your Text Experience</h2>
                        <p className='italic text-base sm:text-lg font-extrabold baskervville-regular-italic text-gray-600'>Try out our language detection, summarization and translation features to make your text processing easier and more efficient.</p>
                        <button className='border border-[#1d4537] bg-[#1d4537] text-white py-3 px-10 font-semibold hover:text-[#1d4537] hover:bg-[#d0d0ce] transition-all duration-500 ease-in-out'>Get Started</button>
                    </div>
                    <img src={bgai} alt="" className='flex-1 w-[400px] sm:w-[300px]' />
                </div> */}

                <div
                    className="flex flex-col sm:flex-row items-center pt-24 sm:pt-0"
                >
                    <motion.div
                        className="flex-1 flex flex-col items-start gap-5"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-3xl sm:text-5xl lg:text-7xl font-semibold baskervville-regular"
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Enhance Your Text Experience
                        </motion.h2>

                        <motion.p
                            className="italic text-base sm:text-lg font-extrabold baskervville-regular-italic text-gray-600"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Try out our language detection, summarization and translation features
                            to make your text processing easier and more efficient.
                        </motion.p>

                        <motion.button
                            className="border border-[#1d4537] bg-[#1d4537] text-white py-3 px-10 font-semibold hover:text-[#1d4537] hover:bg-[#d0d0ce] transition-all duration-500 ease-in-out"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Get Started
                        </motion.button>
                    </motion.div>

                    <motion.img
                        src={bgai}
                        alt=""
                        className="flex-1 w-[400px] sm:w-[300px]"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                        viewport={{ once: true }}
                    />
                </div>

            </div>
        </div>
    )
}

export default Welcome