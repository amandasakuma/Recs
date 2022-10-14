import React, {Fragment, useState} from 'react'
import { Routes, Route, NavLink, Link, useNavigate } from "react-router-dom"
import logo from '../logo.png'

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
        <nav className='nav'>
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
            <NavLink id="nav-profile" to="profile">Profile: {user.username}</NavLink>} 
            
            <div className="nav-logout">
            {user ? <button className='nav-button' onClick = {handleLogout}>Logout</button> : null}
            </div>
        </nav>
            
   </Fragment>    
  )
}
 