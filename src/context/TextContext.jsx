import { createContext, useState } from "react";

export const TextContext = createContext()

export const TextProvider = ({ children }) => {

    const [messages, setMessages] = useState([])
    const [input, setInput] = useState("")  

    const detectLanguage = (text) => {
        if (text) {
            return "en"
        }
        return "unknown"
    }

    const handleSend = (text) => {
        if (!text.trim()) return;

        setMessages([...messages, {id: Date.now(), text, type: "user"}])

        // Detect language
        const language = detectLanguage(text);
        if (!language) return alert("Language detection failed.");

        const languageMessage = { id: Date.now() + 1, text: `Detected Language: ${language}`, type: "info" };
        setMessages((prev) => [...prev, languageMessage]);

        // Add AI response
        const aiMessage = { id: Date.now() + 2, text: "Processing...", type: "bot", language };
        setMessages((prev) => [...prev, aiMessage]);
    }

    const value = {
        messages,
        setMessages,
        input,
        setInput,
        handleSend
    }

    return (
        <TextContext.Provider value={value}>
            {children}
        </TextContext.Provider>
    )
}

