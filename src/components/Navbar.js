import React from 'react'
import { Link, useLocation  } from "react-router-dom";
import {useNavigate } from "react-router-dom"


export const Navbar = () => {
  let navigate = useNavigate();
  const handleLogOut = ()=>{
    localStorage.removeItem('token')
    navigate("/login");
  }

  let location = useLocation();
  // React.useEffect(() => {
  //   console.log(location.pathname);
  // }, [location])
  return (
    <div className='navbar-div'>
        <nav className="navbar">
            <h3 className="navbar-heading">iNotebook</h3>
            <ul className="navbar-links">
                <li className={`navbar-list ${location.pathname==="/"?"active":""}`}><Link to="/">Home</Link></li>
                <li className={`navbar-list ${location.pathname==="/about"?"active":""}`}><Link to="/about">About</Link></li>
                {!localStorage.getItem('token')?<div className="login-signupp">
                  <li className="navbar-list"><Link to="/login">Login</Link></li>
                  <li className="navbar-list"><Link to="/signup">Sign Up</Link></li>
                </div>:<li className="navbar-list"><button onClick={handleLogOut} >Logout</button></li>}
            </ul>
        </nav>
    </div>
  )
}
