import React, { useContext } from 'react'
import { TextContext } from '../context/TextContext'

const ChatSection = () => {

    const {messages, setMessages} = useContext(TextContext)

    return (
        <div className='flex w-full justify-center'>
            <div className="w-[94%] sm:w-[80%] flex items-center">
                {
                    messages &&
                    messages.map((message) => (
                        <div key={message.id} className={`w-full p-3 my-2 rounded-lg ${message.type === "bot" ? "bg-[#1d4537] text-white self-start" : "bg-[#d0d0ce] text-black self-end"}`}>
                            {message.text}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ChatSection