import React from 'react'
import { Link } from 'react-router-dom';
import './nav.css'
import ThemeBtn from '../buttons/ThemeBtn';

const FixNav = {
    position: "fixed",
    top: 0,
    zIndex: 1200,
}

function changeNavColor(){
	const navBarBgcolor = document.querySelector(".transpNav")
	const navScrollValue = window.scrollY;
	if(navScrollValue < 10){
		navBarBgcolor.classList.remove("navbg");
	} else{
		navBarBgcolor.classList.add("navbg");
	}
}

window.addEventListener("scroll", changeNavColor);

export default function Nav() {
  return (
    <nav className="navbar transpNav p-0 pt-1 navbar-expand-sm w-100  mb-5" style={FixNav}>
        <div className='container' style={{maxWidth: 1200}}>
                <a className="navbar-brand logo" href="#">
                    <h3 className='colorP'>SoePaing.<span className='themeColor'>Dev</span></h3>
                </a>
            <div className="navbar nav">
                <li className="nav-item active">
                    {/* <Link className='text-decoration-none' to="/soe-paing/"> */}
                        <a className="nav-link" href="#">HOME</a>
                    {/* </Link> */}
                </li>
                <li className="nav-item">
                    {/* <Link className='text-decoration-none' to="/soe-paing/about"> */}
                        <a className="nav-link" href="#">ABOUT</a>
                    {/* </Link> */}
                </li>
                <li className="nav-item">
                    {/* <Link className='text-decoration-none' to="/soe-paing/contact" > */}
                        <a className="nav-link" href="#">CONTACT</a>
                    {/* </Link> */}
                </li>
                <ThemeBtn/>
            </div>
        </div>
    </nav>
  )
}