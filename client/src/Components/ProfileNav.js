import React from 'react'
import { Link, Outlet } from "react-router-dom"


export default function ProfileNav({user}) {
  return (
<>
<div className='profile-header'>
    <h1>{user.username}</h1>
      <nav className='profile-nav'>
          <Link to='/profile/posts'>Posts</Link>
          <Link to='/profile/drafts'>Drafts</Link>
          <Link to='/profile/about'>About</Link>
          
      </nav>   
<Outlet />
</div>
</>
)
} 
