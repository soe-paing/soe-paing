import React from 'react';
import './home.css';
import codingImg from '../../assests/img/working.gif';
import About from '../about/About';

export default function Home() {
  return (
    <>
    <div className='imgBg'>
      <div className='container'>
        <div className='row'>
          <div className='col-6 text-light d-flex align-items-center justify-content-center'>
            <div>
              <span>Hello! I am</span>
              <h1 className='fw-bolder'>Soe Paing</h1>
              <h3 className='fw-bold'>Front-Ent Developer</h3>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing</span><br/>
              <span>elit. Sint hic deleniti accusantium</span>
              <div className='mt-4'>
                <button className='btn btn-sm btn-primary'>Contact Me</button>
                <button className='ms-2 btn btn-sm btn-primary'>Download CV</button>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <img src={codingImg}></img>
          </div>
        </div>
      </div>
    </div>
    <About/>
    </>
  )
}
