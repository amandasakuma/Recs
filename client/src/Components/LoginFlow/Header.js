import React, {Fragment} from 'react'
import {  NavLink, useParams } from "react-router-dom"
import logo from './logo.png'
// import { Dropdown, Image } from 'semantic-ui-react'

import MenuItem from 'react-bootstrap-dropdown-menu/dist/MenuItem';
import DropdownMenu from 'react-bootstrap-dropdown-menu/dist/DropdownMenu';

export default function Header({user, setUser}) {
console.log(user)


    const params = useParams();
    console.log(params)

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

            <NavLink id="nav-recs" to="/" > Recs </NavLink>

            <NavLink id="nav-editor" to="/card-editor"
                    style={({isActive}) => 
                    isActive ? activeStyle : null}
            > <button className='nav-button'>Create</button>
            </NavLink>
            
             {/* <NavLink id="nav-login" to="/login">Login</NavLink> */}

            {!user ? 
            <NavLink id="nav-login" to="/login">Login</NavLink>
            :  

            <div className='menu'>
                <DropdownMenu userName={user.username} position='left' triggerType='image' trigger={user.profile_pic}>
                    <MenuItem text="Profile" location={`/profile/${user.username}/posts`}/>
                    <MenuItem text="Your Recs" location={`/profile/${user.username}/posts`}/>
                    <MenuItem text="Saved Recs" location="/profile/me/posts"/>
                    <MenuItem type='separator' />
                    <MenuItem text="Edit Profile" location={`/profile/${user.username}/about`}/>
                    <MenuItem text="Logout" onClick = {handleLogout} />
                </DropdownMenu>
            </div>
            }
        </nav>         
   </Fragment>    
  )
}
 