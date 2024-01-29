import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './pages/home/Home';

export default function Container() {
  return (
    <div className="themeBg">
        <Nav/>
        <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/soe-paing/about' element={<Home/>}/>
        </Routes>
        </Router>
    </div>
  )
}
