import React from 'react'
import './navbar.css'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {BsAwardFill} from 'react-icons/bs'

const Navbar = () => {
  const [activeNav,SetActiveNav] = React.useState("")
  console.log("nav" , activeNav)
  return (
      
      <div id="nav">
      <a href="#" onClick={()=>SetActiveNav("#")}  className={activeNav === '#' ? 'active' : ""} >Home</a>
      <a href="#about"   onClick={()=>SetActiveNav("#about")} className={activeNav === '#about' ? 'active' : ""} >About</a>
      <a href="#skill" onClick={()=>SetActiveNav("#skill")} className={activeNav === '#skill' ? 'active' : ""}>Skills</a>
      <a href="#project" onClick={()=>SetActiveNav("#project")} className={activeNav === '#project' ? 'active' : ""}>Projects</a>
      <a href="#contact" onClick={()=>SetActiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ""}>Contact Me</a>
      </div>
  )
}

export default Navbar
