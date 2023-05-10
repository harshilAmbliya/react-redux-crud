import { useState } from 'react'
import './App.css'
import Navbar from './componenets/Navbar.jsx'
import Home from './Home'
import {  Route, Routes } from 'react-router-dom'
import User from './User'
import Update from './componenets/Update'
function App() {


  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
       
   


    </>
  )
}

export default App
