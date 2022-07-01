import React from 'react'
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <div className='navbar-div'>
        <nav className="navbar">
            <h3 className="navbar-heading">iNotebook</h3>
            <ul className="navbar-links">
                <li className="navbar-list"><Link to="/">Home</Link></li>
                <li className="navbar-list"><Link to="/about">About</Link></li>
                {/* <li className="navbar-list"><Link to="/login">Login/Sign Up</Link></li> */}
            </ul>
        </nav>
    </div>
  )
}
