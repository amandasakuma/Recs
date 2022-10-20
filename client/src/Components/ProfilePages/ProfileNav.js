import React from 'react'
import { Link, Outlet } from "react-router-dom"


export default function ProfileNav({user}) {
  return (
<>
<div className='profile-header'>
    <h1>{user.username}</h1>
    <p>Followers {user.follower_count}</p>
    <p>Following {user.following_count}</p>
      <nav className='profile-nav'>
          <Link to='posts'>Posts</Link>
          <Link to='drafts'>Drafts</Link>
          <Link to='about'>About</Link>
          
      </nav>   
<Outlet />
</div>
</>
)
} 
