import { Send } from 'lucide-react'
import React, { useContext } from 'react'
import { TextContext } from '../context/TextContext'

const InputBox = ( ) => {

    const {input, setInput, handleSend} = useContext(TextContext)

    const handleSendClick = () => {
        handleSend(input)
        setInput("")
    }

    return (
        <div className='fixed bottom-0 flex justify-center w-full py-3 bg-inherit'>
            <div className="w-[94%] sm:w-[80%] flex items-center">
                <textarea 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Type here...'
                    className='flex-1 px-5 py-3.5 h-14 border border-[#1d4537] rounded-full focus:outline-none resize-none w-full'
                />
                <button
                    onClick={handleSendClick}
                    className='h-12 w-12 sm:h-14 sm:w-14 flex justify-center items-center ml-2 bg-[#1d4537] rounded-full text-white hover:bg-[#255c49]'
                >
                    <Send size={20} />
                </button>
            </div>
        </div>
    )
}

export default InputBox