import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import './css/navbar.css';
import logo from "../img/logo.png";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar nav-nav sticky-top navbar-expand-lg navbar-light'>
        <div className="container-fluid">
                  <a className="navbar-brand nav-large pl-lg-5" href={"/portfolio"}>
                    <img className="img-fluid nav-large" alt="Website Logo" src={logo} />
                  </a>
        <div className='menu-icon' onClick={handleClick}>
          <div className={click ? '' : 'fa-box'}><i className={click ? 'fas fa-times' : 'fas fa-bars fa-box'} /></div>
        </div>
        <ul className={click ? 'nav-menu active' : 'navbar-nav nav-menu'}>
          <li className='nav-item pr-3'>
              <NavLink
                to={"/portfolio"}
                className='nav-link'
                activeClassName="active"
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
          </li>
          <li className='nav-item pr-3'>
              <NavLink
                to={"/portfolio/work"}
                className='nav-link'
                activeClassName="active"
                onClick={closeMobileMenu}
              >
                Work
              </NavLink>
          </li>
          <li className="nav-item dropdown pr-3">
            <button type='button' className="nav-link btn-clr dropdown-toggle btn" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Fun
            </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink activeClassName="active" className="dropdown-item" to={"/portfolio/fun/volunteering"} onClick={closeMobileMenu}>Volunteering</NavLink>
                <NavLink activeClassName="active" className="dropdown-item" to={"/portfolio/fun/music"} onClick={closeMobileMenu}>Music</NavLink>
            </div>
          </li>
          <li className='nav-item pr-lg-5'>
            <a target="_blank" 
              rel="noreferrer"
              href="https://www.linkedin.com/in/dakotacbrown/"
              className='nav-link'
              activeClassName="active"
              onClick={closeMobileMenu}
            >
              LinkedIn
            </a>
          </li>
        </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;