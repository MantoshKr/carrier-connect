import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
<Link to='/'>Home</Link>

<Link to='/signup'>Signup</Link>

<Link to='/login'>Login</Link>
    </div>
  )
}

export default Navbar




