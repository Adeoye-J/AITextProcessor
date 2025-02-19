const API_BASE = "https://chromeai.googleapis.com/v1/";

export const detectLanguage = async (text) => {
  try {
    const res = await fetch(`${API_BASE}languageDetection:detect`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    return data.language; // Returns language code (e.g., "en")
  } catch (error) {
    console.error("Language Detection Error:", error);
    return null;
  }
};

export const summarizeText = async (text) => {
  try {
    const res = await fetch(`${API_BASE}summarizer:summarize`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    return data.summary;
  } catch (error) {
    console.error("Summarization Error:", error);
    return null;
  }
};

export const translateText = async (text, targetLanguage) => {
  try {
    const res = await fetch(`${API_BASE}translator:translate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, targetLanguage }),
    });

    const data = await res.json();
    return data.translation;
  } catch (error) {
    console.error("Translation Error:", error);
    return null;
  }
};
