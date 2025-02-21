import React, { useContext, useState } from 'react'
import { TextContext } from '../context/TextContext'

const ChatSection = () => {

    const {messages, translateText, translatedTexts, summarizeText, summarizedTexts, summaryLoading, translateLoading} = useContext(TextContext)

    return (
        <div className='flex w-full justify-center'>
            <div className="w-[94%] sm:w-[80%]">
                {
                    messages &&
                    messages.map((message) => (
                        <div key={message.id} className={`w-full p-3 my-2 border border-[#1d4537] rounded-lg flex flex-col gap-2`}>
                            <p>{message.text}</p>

                            {/* Language Display */}
                            {message.language && <p className="text-xs text-gray-500">{message.language}</p>}

                            {/* Summarize Button */}
                            {message.text.length > 150 && (
                                <button onClick={() => summarizeText(message.text, message.id)} className="mt-2 text-[#1d4537] font-bold w-[150px] border border-[#1d4537] rounded-lg py-2 px-2 hover:bg-[#1d4537] hover:text-white transition-all duration-500 ease-in-out">
                                    Summarize
                                </button>
                            )}
                            {summarizedTexts[message.id] && <p className="mt-1 text-sm text-green-600">{summarizedTexts[message.id]}</p>}

                            {/* Translate Dropdown */}
                            <select onChange={(e) => translateText(message.text, e.target.value)} className="mt-2 p-1 border max-w-[150px] bg-transparent border-[#1d4537] cursor-pointer py-2">
                                <option value="">Translate to...</option>
                                <option value="pt">Portuguese</option>
                                <option value="es">Spanish</option>
                                <option value="ru">Russian</option>
                                <option value="tr">Turkish</option>
                                <option value="fr">French</option>
                            </select>
                            
                            {summaryLoading[message.id] && <p className="mt-1 text-sm text-[#1d4537]">Loading Summary...</p>}
                            {translateLoading[message.id] && <p className="mt-1 text-sm text-[#1d4537]">Loading Translation...</p>}
                            {translatedTexts[message.id] && <p className="mt-1 text-sm text-blue-600">{translatedTexts[message.id]}</p>}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ChatSection