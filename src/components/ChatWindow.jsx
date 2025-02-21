import React, { useState } from 'react'
import { summarizeText, translateText } from '../utils/api';

const ChatWindow = ({ messages }) => {

    const [translatedTexts, setTranslatedTexts] = useState({});
    const [summarizedTexts, setSummarizedTexts] = useState({});

    const handleSummarize = async (text, id) => {
        const summary = await summarizeText(text);
        if (summary) {
            setSummarizedTexts((prev) => ({ ...prev, [id]: summary }));
        }
    };
    
    const handleTranslate = async (text, targetLanguage, id) => {
        const translation = await translateText(text, targetLanguage);
        if (translation) {
            setTranslatedTexts((prev) => ({ ...prev, [id]: translation }));
        }
    }

    return (
        <div>
            {
                messages.map((message) => (
                    // <div 
                    //     key={message.id}
                    //     className={`p-3 mb-2 rounded-lg max-w-xs ${
                    //         message.type === "user"
                    //             ? "bg-blue-500 text-white self-end"
                    //             : "bg-gray-200 text-black"
                    //     }`}
                    // >
                    //     {message.text}
                    // </div>

                    <div key={message.id} className="p-3 mb-2 bg-gray-200 rounded-lg max-w-xs">
                        <p>{message.text}</p>

                        {/* Language Display */}
                        {message.language && <p className="text-xs text-gray-500">Language: {message.language}</p>}

                        {/* Summarize Button */}
                        {message.text.length > 150 && (
                            <button onClick={() => handleSummarize(message.text, message.id)} className="mt-2 text-blue-500">
                                Summarize
                            </button>
                        )}
                        {summarizedTexts[message.id] && <p className="mt-1 text-sm text-green-600">{summarizedTexts[message.id]}</p>}

                        {/* Translate Dropdown */}
                        <select onChange={(e) => handleTranslate(message.text, e.target.value, message.id)} className="mt-2 p-1 border">
                            <option value="">Translate to...</option>
                            <option value="pt">Portuguese</option>
                            <option value="es">Spanish</option>
                            <option value="ru">Russian</option>
                            <option value="tr">Turkish</option>
                            <option value="fr">French</option>
                        </select>

                        {translatedTexts[message.id] && <p className="mt-1 text-sm text-blue-600">{translatedTexts[message.id]}</p>}
                    </div>
                ))
            }
        </div>
    )
}

export default ChatWindow