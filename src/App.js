import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './page/Home'
import Tips from './page/Tips'
import Login from './page/Login'
import Profile from './page/Profile';
import Context from './components/Context';
const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/context" element={<Context />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App 