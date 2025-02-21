# AI-Powered Text Processing Interface

## Overview
This project is an AI-powered text processing interface built using **React.js**. It leverages **Chrome's AI APIs** to provide text-based functionalities such as:
- **Language Detection**
- **Text Summarization**
- **Text Translation**

The interface is designed to be clean, responsive, and accessible, mimicking a chat-like experience where users can input text and interact with AI-powered features.

## Features
### Core Functionalities
- **Input Display**: Users can enter text into a textarea field and send it using a button with a send icon.
- **Text Rendering**: The input text appears in the output area immediately after submission.
- **Language Detection**: The application detects the language of the entered text and displays it.
- **Text Summarization**: If the text exceeds **150 characters** and is in **English**, a "Summarize" button appears to generate a summary using the Summarizer API.
- **Text Translation**: Users can translate the text into the following languages:
  - English (en)
  - Portuguese (pt)
  - Spanish (es)
  - Russian (ru)
  - Turkish (tr)
  - French (fr)
- **Output Display**: The summarized and/or translated text is displayed beneath the original input.

### API Integration
- Uses **AI APIs** for language detection, summarization, and translation.
- API requests are handled asynchronously using **async/await** with error handling mechanisms.
- Displays error messages for invalid input or failed API calls.

### Accessibility
- Fully keyboard-navigable.
- Includes **ARIA labels** and focus indicators for interactive elements.
- Ensures screen-reader compatibility.

### Responsive Design
- Optimized for different screen sizes (**desktop, tablet, mobile**).
- Implements a **flexible grid layout** for usability on small screens.

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **npm** or **yarn**

### Clone Repository
```sh
git clone https://github.com/Adeoye-J/AITextProcessor.git
cd AITextProcessor
```

### Install Dependencies
```sh
npm install
# or
yarn install
```

### Run Development Server
```sh
npm run dev
# or
yarn dev
```

### Build for Production
```sh
npm run build
# or
yarn build
```

### Deploy
Deploy the project on a hosting platform such as **Vercel, Netlify, or GitHub Pages**.

## Usage
1. Enter text into the input field and click **Send**.
2. The text appears in the output area along with detected language information.
3. If applicable, click **Summarize** to generate a summary.
4. Select a language from the dropdown and click **Translate** to view the translated text.

## Error Handling
- If the API call fails, an error message is displayed.
- If the input text is empty or invalid, a warning message appears.
- Users receive feedback on incomplete or unsuccessful operations.

## Technologies Used
- **React.js** (Frontend Framework)
- **AI APIs** (Summarization, Translation, Language Detection)
- **CSS** (Responsive UI Design)
- **JavaScript (ES6+)** (Async API Handling)

## Deployment
- Hosted on **[Vercel](https://ai-text-processor-teal.vercel.app/)** (https://ai-text-processor-teal.vercel.app/)
- GitHub Repository: [Github Repo](https://github.com/Adeoye-J/AITextProcessor)

## License
This project is licensed under the **MIT License**.
