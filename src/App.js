import React, { createContext } from 'react';
import Container from './Container';
import useLocalStorage from 'use-local-storage';

export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div data-theme={theme}>
        <Container/>
      </div>
    </ThemeContext.Provider>
  )
}