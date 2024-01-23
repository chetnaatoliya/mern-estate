import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './pages/Home';
import SingIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';

export default function App() {
  return <BrowserRouter>
    <Routes> 
    <Route path="/" element={<Home />}/>
    <Route path="/sign-in" element={<SingIn />}/>
    <Route path ="/sing-up" element={<SignUp/>}/>
    <Route path ="/About" element={<About />}/>
    <Route path ="/Profile" element={<Profile />}/>
    </Routes>
    </BrowserRouter>
  
}
