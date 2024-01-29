import React from 'react'
import { Link } from 'react-router-dom';
import './nav.css'
import ThemeBtn from '../buttons/ThemeBtn';

const FixNav = {
    position: "fixed",
    top: 0,
    zIndex: 1200,
}

const NavItems = () => {
    return (
        <>
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
                {/* <Link className='text-decoration-none' to="/soe-paing/project"> */}
                    <a className="nav-link" href="#">PROJECTS</a>
                {/* </Link> */}
            </li>
            <li className="nav-item">
                {/* <Link className='text-decoration-none' to="/soe-paing/contact" > */}
                    <a className="nav-link" href="#">CONTACT</a>
                {/* </Link> */}
            </li>
        </>
    )
}

const Modal = () => {
  return (
    <div className="modal d-md-none fade h-90" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content back-filter colorP">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Menu</h5>
                    <i type="button" className="fas fa-xmark fs-3" data-bs-dismiss="modal" aria-label="Close"></i>
                </div>
                <div className="modal-body mobile-nav text-center height-100 navbar d-block nav">
                    <NavItems/>
                </div>
            </div>
        </div>
    </div>
  )
}

function changeNavColor(){
	const navBarBgcolor = document.querySelector(".transpNav")
	const navScrollValue = window.scrollY;
	if(navScrollValue < 10){
		navBarBgcolor.classList.remove("back-filter");
	} else{
		navBarBgcolor.classList.add("back-filter");
	}
}

window.addEventListener("scroll", changeNavColor);

export default function Nav() {
  return (
    <nav className="navbar transpNav p-0 pt-1 navbar-expand-sm w-100" style={FixNav}>
        <div className='container' style={{maxWidth: 1200}}>
            <a className="navbar-brand pt-2 flex-fill logo" href="#">
                <h3 className='colorP'>SoePaing.<span className='themeColor'>Dev</span></h3>
            </a>
            <div className="navbar d-none d-md-flex nav">
                <NavItems/>
            </div>
            <ThemeBtn/>
            <i className='fas d-block d-md-none ms-4 me-2 fa-bars colorP fs-3' data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            <Modal/>
        </div>
    </nav>
  )
}