import React from 'react';
import Home from './home/Home';
import About from './about/About';
import Projects from './projects/Projects'
import ScrollToTop from '../components/buttons/ScrollToTop';

export default function Main() {
  return (
    <>
    <Home id={'home'}/>
    <About id={'about'}/>
    <Projects id={'projects'}/>
    <ScrollToTop/>
    </>
  )
}
