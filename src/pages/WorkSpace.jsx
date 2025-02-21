import React from 'react'
import InputBox from '../components/InputBox'
import ChatSection from '../components/ChatSection'

const WorkSpace = () => {

    return (
        <div className='py-20 min-h-screen bg-[#d0d0ce]'>
            <ChatSection />


            <InputBox />
        </div>
    )
}

export default WorkSpace