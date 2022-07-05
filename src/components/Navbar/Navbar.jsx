import React, { useState } from 'react'
import './Navbar.css'
import {FcHome} from 'react-icons/fc'
import {FcSearch} from 'react-icons/fc'
import {MdAnnouncement} from 'react-icons/md'
import {AiOutlineKey} from 'react-icons/ai'

const Navbar = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className='navbar'>
      <a href="/">
        <h1>Realtor</h1>
      </a>
      <div className="dropdown-hamburger" onClick={() => setShowDropdown(prev => !prev)}>
        <div className='hamburger'>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
        {showDropdown && (
          <div className="dropdown">
            <a href="/" className="dropdown-el">
              <FcHome />
              <span>Home</span>
            </a>
            <a href="/search" className="dropdown-el">
              <FcSearch />
              <span>Search</span>
            </a>
            <a href="/"  className="dropdown-el">
              <MdAnnouncement />
              <span>Buy a Property</span>
            </a>
            <a href="/"  className="dropdown-el">
              <AiOutlineKey />
              <span>Rent a Property</span>
            </a>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar