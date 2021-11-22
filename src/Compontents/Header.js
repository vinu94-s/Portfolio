import React from 'react'
import './Header.css'
import {Link} from "react-scroll"

const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <h1>MERN <span>Developer</span></h1>
            </div>
            <div className="header_right">
               <Link to="about" smooth={true} duration={500}>
                   <h1>About</h1>
               </Link>
               <Link to="skills" smooth={true} duration={500}>
                   <h1>Skill</h1>
               </Link>
               <Link to="projects" smooth={true} duration={500}>
                   <h1>Project</h1>
               </Link>
               <Link to="contact" smooth={true} duration={500}>
                   <h1>Contact</h1>
               </Link>
            </div>
        </div>
    )
}

export default Header