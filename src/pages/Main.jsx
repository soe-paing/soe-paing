import React, { createContext, useState } from 'react';
import Home from './home/Home';
import About from './about/About';
import Projects from './projects/Projects'
import ScrollToTop from '../components/buttons/ScrollToTop';

export const LoadingContext = createContext(null);

export default function Main() {
  const [loading, setLoading] = useState(true);
  return (
    <LoadingContext.Provider value={{loading, setLoading}}>
      <Home id={'home'}/>
      <About id={'about'}/>
      <Projects id={'projects'}/>
      <ScrollToTop/>
    </LoadingContext.Provider>
  )
}
