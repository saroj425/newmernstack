import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from './copmponents/Auth/Register'
import Login from './copmponents/Auth/Login'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
