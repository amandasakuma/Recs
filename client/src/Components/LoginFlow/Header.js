import React, {Fragment, useState} from 'react'
import { Routes, Route, NavLink, Link, useNavigate } from "react-router-dom"
import logo from './logo.png'
import MenuItem from 'react-bootstrap-dropdown-menu/dist/MenuItem';
import DropdownMenu from 'react-bootstrap-dropdown-menu/dist/DropdownMenu';

export default function Header({user, setUser}) {

    const handleLogout = () => {
        setUser("")
        localStorage.removeItem('token')
    }

    let activeStyle = {
        textDecoration: "none"
    }

  return (
<Fragment>
        <nav className='navBar'>
            <img className="nav-logo" src={logo} />
            <NavLink id="nav-recs" to="/" >Recs</NavLink>

            <NavLink id="nav-editor"
                to="/card-editor"
                style={({isActive}) => 
                    isActive ? activeStyle : null}
            > <button className='nav-button'>Create</button>
            </NavLink>

            {!user ? 
            <NavLink id="nav-login" to="/login">Login</NavLink>
            :  

        <div className='menu'>
        <DropdownMenu userName={user.username} position='left' triggerType='image' trigger={logo}>
            <MenuItem text="Profile" location="/profile"/>
            {/* <MenuItem text="Your Recs" location="/profile/posts"/> */}
            <MenuItem text="Saved Recs" location="/profile"/>
            <MenuItem text="Drafts" location="/profile"/>
            <MenuItem type='separator' />
            <MenuItem text="Edit Profile" location="/profile/about"/>
            <MenuItem text="Logout" onClick = {handleLogout} />
        </DropdownMenu>
        </div>
}

        </nav>
 
            
   </Fragment>    
  )
}
 