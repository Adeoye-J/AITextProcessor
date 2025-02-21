import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { TextProvider } from './context/TextContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <TextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </TextProvider>,
)
