import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './pages/contact/contact'
import Home from './pages/home/home'
import Navbar from './components/navbar'
import './assets/sass/global.scss'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact element={<Home />} path='/' />
        <Route exact element={<Contact />} path='/contact' />
      </Routes>
    </Router>
  )
}

export default App