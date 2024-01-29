import React from 'react';
import './home.css';
import codingImg from '../../assests/img/working.gif';
import About from '../about/About';
import Projects from '../projects/Projects';


function Hero() {
  return (
    <div>
      <span>Hello! I am</span>
      <h1 className='fw-bolder'>Soe Paing</h1>
      <h3 className='fw-bold colorP'>Front-End Developer</h3>
      <span className='d-block'>To create responsive User Interfaces,</span>
      <span>a good condition in User Experiences!</span>
      <div className='mt-4'>
        <button className='btn HeroBtn btn-sm btn-primary rounded-pill'>Contact Me</button>
        <button className='ms-2 btn HeroBtn btn-sm btn-primary rounded-pill'>Download CV</button>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
    <div className='heroContainer'>
      <div className='imgBg'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 desktop d-none d-sm-flex themeColor d-flex align-items-center justify-content-center'>
              <Hero/>
            </div>
            <div className='col-sm-6 col-12'>
              <img src={codingImg}></img>
            </div>
          </div>
        </div>
      </div>
      <div className='mainBg py-5 d-sm-none d-block'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 mobile text-center text-light d-flex align-items-center justify-content-center'>
              <Hero/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <About/>
    <Projects/>
    </>
  )
}
