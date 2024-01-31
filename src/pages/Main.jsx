import React from 'react';
import Home from './home/Home';
import About from './about/About';
import Projects from './projects/Projects'

export default function Main() {
  return (
    <>
    <Home id={'home'}/>
    <About id={'about'}/>
    <Projects id={'projects'}/>
    </>
  )
}
