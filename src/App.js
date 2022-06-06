import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import  Home  from './page/home/Home'
import Tips from './page/tips/Tips';
import Login from './page/login/Login'
import NavBar from './page/navbar/NavBar';
import LogOut from './page/LogOut';
const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App