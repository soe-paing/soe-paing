import React, { useContext } from 'react';
import './themeBtn.css';
import { ThemeContext } from '../../App';


export default function ThemeBtn() {
  const value = useContext(ThemeContext);
  return (
    <div onClick={value.changeTheme} className='btn-container ms-0 ms-md-2 rounded-pill'>
      {
        value.theme === "light" ? (
          <div className='fa fa-moon'></div>
          ) : (
          <div className='fa circle'></div>
        )
      }
    </div>
  )
}
