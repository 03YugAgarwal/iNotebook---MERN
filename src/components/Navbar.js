import React from 'react'
import { Link, useLocation  } from "react-router-dom";
import {useNavigate } from "react-router-dom"
import "./Navbar.css"


export const Navbar = () => {
  let navigate = useNavigate();
  const handleLogOut = ()=>{
    localStorage.removeItem('token')
    navigate("/login");
  }

  let location = useLocation();
  React.useEffect(() => {
    // console.log(location.pathname);
  }, [location])
  return (
    <div className='navbar-div'>
        <nav className="navbar">
            <h3 className="navbar-heading">iNotebook</h3>
            <ul className="navbar-links">
                <li className={`navbar-list`}><Link to="/" className={`link-${location.pathname==="/"?"active":""}`}>Home</Link></li>
                {/* <li className={`navbar-list`}><Link to="/about" className={`link-${location.pathname==="/about"?"active":""}`}>About</Link></li> */}
                {!localStorage.getItem('token')?<div className="login-signupp">
                  <li className={`navbar-list`}><Link to="/login" className={`link-${location.pathname==="/login"?"active":""}`}>Login</Link></li>
                  <li className={`navbar-list`}><Link to="/signup" className={`link-${location.pathname==="/signup"?"active":""}`}>Sign Up</Link></li>
                </div>:<li className="navbar-list"><button className='navbar-button' onClick={handleLogOut} >Logout</button></li>}
            </ul>
        </nav>
    </div>
  )
}
