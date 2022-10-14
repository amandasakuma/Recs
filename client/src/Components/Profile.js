import React from 'react'
import { Routes, Route, NavLink } from "react-router-dom"
import ProfilePosts from './ProfilePosts'

export default function Profile({user}) {
  return (
<div className='profile-header'>ProfileNav
    <h1>{user.username}</h1>
      <nav className='profile-nav'>
        {/* <Routes>
          <Route path="/posts" element={<ProfilePosts />} /> */}
          {/* <Route path="/profile" element={<ProfileNav user={user}/>} />
          <Route path="/login" element={<LoginSignUpPage user={user} setUser={setUser}/>} />
          <Route path="/card-editor" element={<CardEditor user={user}/>} /> */}
        {/* </Routes> */}
      
          <NavLink to='/posts'>Posts</NavLink>
          <NavLink to='/drafts'>Drafts</NavLink>
          <NavLink to='/about'>About</NavLink>
      </nav>   
    <ProfilePosts user={user}/>
  </div>
  )
}
