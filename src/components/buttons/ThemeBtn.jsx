import React from 'react';
import './themeBtn.css';

export default function ThemeBtn({content}) {
  return (
    <div className='btn-container rounded-pill'>
      <div className='circle'></div>
      <div className='second'></div>
    </div>
  )
}
