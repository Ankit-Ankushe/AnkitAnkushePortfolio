import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../Items/profilePic.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <div id="header">
      <div className="container header__container">
        <h5 style={{fontSize:"30px"}}>Hello I'm</h5>
        <h1 style={{fontSize:"70px"}}>Ankit Ankushe</h1>
        <h5 className="text-light" style={{fontSize:"40px"}}>Fullstack Web Developer</h5>
        <CTA/>
        <HeaderSocials/>
        {/* <div className="me">
          <img src={ME} id="profilePic" alt="me" />
        </div> */}
        {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
      </div>
    </div>
  )
}
export default Header
