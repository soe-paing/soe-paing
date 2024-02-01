import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/footer';
import Main from './pages/main';

export const ActiveContext = createContext(null);

export default function Container() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <ActiveContext.Provider value={{ activeItem, setActiveItem }}>
      <div className="themeBg">
        <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/contact' element={<Contact id="contact" />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ActiveContext.Provider>
  );
}