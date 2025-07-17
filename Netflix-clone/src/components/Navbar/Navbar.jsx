import React from 'react'
import './Navbar.css'
import {textarea , Text} from 'react'
import logo from '../../assets/images/logo.png'
import search from '../../assets/images/search_icon.svg'
import bell from '../../assets/images/bell_icon.svg'
import profile from '../../assets/images/profile_img.png'
import caret from '../../assets/images/caret_icon.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="netflix logo" className='logo'/>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
     <div className="navbar-right">
        <img src={search} alt="search" className='icons' />
        <p name="" id="">Kids</p>
        <img src={bell} alt="bell" className='icons' />
          <div className="navbar-profile">
              <img src={profile} alt="profile" className='profile' />
              <img src={caret} alt="caret" className='icons' />
              <div className="dropdown">
                <p>Sign Out of Netflix</p>
              </div>
          </div>
      </div> 
    </div>
  )
}

export default Navbar