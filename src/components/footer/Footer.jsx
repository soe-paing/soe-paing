import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className='footer-section'>
        <div className='container'>
            <div className='left'>
                <span className='text-light'>@2024 Allright Reserved.</span>
            </div>
            <div className='right'>
                    <span><i className='fa-brands fa-facebook'></i></span>
                    <div><i className='fas fa-envelope'></i><span className='d-none d-md-inline'>herryjacker4@gmail.com</span></div>
                    <div><i className='fas fa-phone'></i><span className='d-none d-md-inline'>09-977619881</span></div>
            </div>
        </div>
    </div>
  )
}
