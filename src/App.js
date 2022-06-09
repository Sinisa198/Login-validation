import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './page/Home'
import Tips from './page/Tips'
import Login from './page/Login'
import Profile from './page/Profile';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App 