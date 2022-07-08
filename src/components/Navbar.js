import React from 'react'
import { Link, useLocation  } from "react-router-dom";


export const Navbar = () => {
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
                {/* <li className="navbar-list"><Link to="/login">Login/Sign Up</Link></li> */}
            </ul>
        </nav>
    </div>
  )
}
