import React from 'react'
import { Link } from 'react-router-dom'
import "../Css/Nav.css";

const Navbar = () => {
  return (
    <div id='nav'>
        <Link to="/" className='link'>Home</Link>
        <Link to="/Shop"className='link'>Shop</Link>
        <Link to="/Whyus"className='link'>Whyus</Link>
        <Link to="/Testimonial" className='link'>Testimonial</Link>
        <Link to="/Contact" className='link'>Contact</Link>
        <Link to="/Login" className='link'>Login</Link>
      
    </div>
  )
}

export default Navbar
