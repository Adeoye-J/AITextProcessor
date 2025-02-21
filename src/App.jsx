import React from 'react'
import Welcome from './pages/Welcome'
import { AnimatePresence } from 'framer-motion'

const App = () => {

    return (
        <div>
            <AnimatePresence>
                <Welcome />
            </AnimatePresence>
        </div>
    )
}

export default App