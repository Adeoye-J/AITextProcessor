import React, { useState } from 'react'
import ChatWindow from './components/ChatWindow'
import InputBox from './components/InputBox'
import { detectLanguage } from './utils/api'
import StackingCards from './components/StackingCards'

const App1 = () => {

    const [messages, setMessages] = useState([])

    const handleSend = async (text) => {
        if (!text.trim()) return;

        setMessages([...messages, {id: Date.now(), text, type: "user"}])

        // Detect language
        const language = await detectLanguage(text);
        if (!language) return alert("Language detection failed.");

        const languageMessage = { id: Date.now() + 1, text: `Detected Language: ${language}`, type: "info" };
        setMessages((prev) => [...prev, languageMessage]);

        // Add AI response
        const aiMessage = { id: Date.now() + 2, text: "Processing...", type: "bot", language };
        setMessages((prev) => [...prev, aiMessage]);
    }

    return (
        <div className='flex flex-col h-[300vh] bg-gray-100'>
            {/* <ChatWindow messages={messages} />

            <InputBox onSend={handleSend} /> */}

            {/* <StackingCards /> */}
        </div>
    )
}

export default App1