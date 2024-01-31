import React, { useContext, useEffect } from 'react';
import './home.css';
import codingImg from '../../assests/img/working.gif';
import Btn from '../../components/buttons/Btn';
import useIntersectionObserver from '../../customHook/useInterSectionObserver';
import { ActiveContext } from '../../Container';


function Hero() {
  return (
    <div>
      <span>Hello! I am</span>
      <h1 className='fw-bolder'>Soe Paing</h1>
      <h3 className='fw-bold colorP'>Front-End Developer</h3>
      <span className='d-block'>To create responsive User Interfaces,</span>
      <span>with a good condition in User Experiences!</span>
      <div className='mt-4'>
        <Btn text="Contact Me"/>
        <Btn text="Download CV"/>
      </div>
    </div>
  )
}

export default function Home({id}) {
  const {activeItem, setActiveItem} = useContext(ActiveContext);
  const targetRef = useIntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        yourFunction(id);
      }
    });
  }, { threshold: 0.5 });

  const yourFunction = (id) => {
    setActiveItem(id);
  };
  return (
    <div ref={targetRef} className='heroContainer' id='home'>
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
  )
}
