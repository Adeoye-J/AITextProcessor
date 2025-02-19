import { Send } from 'lucide-react'
import React, { useState } from 'react'

const InputBox = ( {onSend} ) => {

    const [input, setInput] = useState("")

    const handleSendClick = () => {
        onSend(input)
        setInput("")
    }

    return (
        <div>
            <textarea 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                placeholder='Type here...'
                className='flex-1 p-2 border rounded-md focus:outline-none resize-none'
            />
            <button
                onClick={handleSendClick}
                className='p-2 ml-2 bg-blue-500 rounded-full text-white hover:bg-blue-700'
            >
                <Send size={20} />
            </button>
        </div>
    )
}

export default InputBox