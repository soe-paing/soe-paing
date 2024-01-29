import React, { useContext } from 'react';
import './themeBtn.css';
import { ThemeContext } from '../../App';


export default function ThemeBtn() {
  const value = useContext(ThemeContext);
  return (
    <div onClick={value.changeTheme} className='btn-container rounded-pill'>
      {
        value.theme === "dark" ? (
          <div className='fa circle'></div>
        ) : (
          <div className='fa fa-moon'></div>
        )
      }
    </div>
  )
}
