import React from 'react'
import { Link, Outlet, Routes, Route, } from "react-router-dom"
import ProfilePosts from './ProfilePosts'
import ProfileAbout from './ProfileAbout'


export default function ProfileNav({user, id}) {

  return (
 <>
<div className='profile-header'>
    <h1>{user.username}</h1>
    <p>Followers {user.follower_count}</p>
    <p>Following {user.following_count}</p>
      <nav className='profile-nav'>
          <Link to={`/profile/${id}/posts`}>Posts</Link>
          <Link to={`/profile/${id}/about`}>About</Link>
          
      </nav>   
<Outlet />
    <Routes>
        <Route path="posts" element={<ProfilePosts user={user}/>}/>
        <Route path="about" element={<ProfileAbout user={user}/>} />
    </Routes>
</div>
</> 
)
} 
