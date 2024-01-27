import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './pages/home/Home';

export default function App() {
  return (
    <>
    <Nav/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/soe-paing/about' element={<Home/>}/>
        <Route path='/soe-paing/' />
        <Route path='/soe-paing/live'/>
      </Routes>
    </Router>
    </>
  )
}