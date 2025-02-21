import React from 'react'
import Welcome from './pages/Welcome'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import WorkSpace from './pages/WorkSpace'

const App = () => {

    return (
        <div>
            <AnimatePresence>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Welcome />} />
                    <Route path='/workspace' element={<WorkSpace />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default App