import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div className='Navbar'>
        <h1>GreenShift</h1>
        <div className="navItem">
        <Link to='/Home'> Services</Link>
        <Link to='/services'> Services</Link>
        <Link to='Services'> Services</Link>
        </div>
    </div>
  )
}

export default Navbar