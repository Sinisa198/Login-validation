import React from 'react'
import { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './page/Home'
import Tips from './page/Tips'
import Login from './page/Login'
import Profile from './page/Profile';
import PrivateRoute from './components/PrivateRoute';


const App = () => {
  return (
  <div className="App">
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute isLogged={false} />}>
        <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App 