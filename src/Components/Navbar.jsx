import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
  <>
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? '' : 'py-4'}`}>
      <div className="container">
        <Link to="/" className='navbar-brand text-white text-uppercase fw-bolder fs-2'>Start Framework</Link>
        <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item me-3'>
              <NavLink className='nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3' to="/">home</NavLink>
            </li>
            <li className='nav-item me-3'>
              <NavLink className='nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3' to="about">about</NavLink>
            </li>
            <li className='nav-item me-3'>
              <NavLink className='nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3' to="portfolio">portfolio</NavLink>
            </li>
            <li className='nav-item me-3'>
              <NavLink  className='nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 rounded-3' to="contact">contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  )
}
