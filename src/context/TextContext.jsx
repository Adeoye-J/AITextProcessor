import { createContext, useState, useEffect } from "react";
import LanguageDetect from 'languagedetect';
import axios from "axios";

export const TextContext = createContext();

export const TextProvider = ({ children }) => {
    const [messages, setMessages] = useState(() => {
        return JSON.parse(localStorage.getItem("messages")) || [];
    });

    const [translatedTexts, setTranslatedTexts] = useState(() => {
        return JSON.parse(localStorage.getItem("translatedTexts")) || {};
    });

    const [summarizedTexts, setSummarizedTexts] = useState(() => {
        return JSON.parse(localStorage.getItem("summarizedTexts")) || {};
    });

    const [summaryLoading, setSummaryLoading] = useState(false);
    const [translateLoading, setTranslateLoading] = useState(false);
    const [input, setInput] = useState("");

    const lngDetector = new LanguageDetect();
    const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

    const detectLanguage = (text) => {
        if (text) {
            const result = lngDetector.detect(text, 1);
            if (result && result.length) return result[0][0]; 
        }
        return "unknown"; 
    };

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const summarizeText = async (text, id) => {
        if (!text) return alert("Please enter some text to summarize.");

        setSummaryLoading(true);
        await delay(1000);

        try {
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-3.5-turbo",
                    messages: [{ role: "user", content: `Summarize this: ${text}` }],
                    max_tokens: 100
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${API_KEY}`
                    }
                }
            );

            setSummarizedTexts((prev) => {
                const updated = { ...prev, [id]: response.data.choices[0].message.content };
                localStorage.setItem("summarizedTexts", JSON.stringify(updated));
                return updated;
            });
        } catch (error) {
            console.error("Error fetching summary:", error);
            alert("Failed to fetch summary. Check API key or try again later.");
        }

        setSummaryLoading(false);
    };

    const translateText = async (text, targetLang, id) => {
        setTranslateLoading(true);
        await delay(1000);

        try {
            const response = await fetch(
                `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`
            );
            const data = await response.json();

            if (data.responseData.translatedText) {
                setTranslatedTexts((prev) => {
                    const updated = { ...prev, [id]: data.responseData.translatedText };
                    localStorage.setItem("translatedTexts", JSON.stringify(updated));
                    return updated;
                });
            }
        } catch (error) {
            console.error("Error fetching translation:", error);
        }

        setTranslateLoading(false);
    };

    const handleSend = (text) => {
        if (!text.trim()) return;

        const language = detectLanguage(text);
        const newMessage = { id: Date.now(), text, language: `Detected Language: ${language}`, type: "user" };

        setMessages((prev) => {
            const updated = [...prev, newMessage];
            localStorage.setItem("messages", JSON.stringify(updated));
            return updated;
        });
    };

    // ✅ Load data from localStorage on mount
    useEffect(() => {
        const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
        const storedTranslatedTexts = JSON.parse(localStorage.getItem("translatedTexts")) || {};
        const storedSummarizedTexts = JSON.parse(localStorage.getItem("summarizedTexts")) || {};

        setMessages(storedMessages);
        setTranslatedTexts(storedTranslatedTexts);
        setSummarizedTexts(storedSummarizedTexts);
    }, []);

    const value = {
        messages,
        setMessages,
        input,
        setInput,
        handleSend,
        detectLanguage,
        translateText,
        translatedTexts,
        summarizeText,
        summarizedTexts,
        summaryLoading,
        translateLoading
    };

    return <TextContext.Provider value={value}>{children}</TextContext.Provider>;
};
