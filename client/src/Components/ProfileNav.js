import React from 'react'
import { Routes, Route, NavLink } from "react-router-dom"
import Profile from './Profile'
import ProfilePosts from './ProfilePosts'
import ProfileDrafts from './ProfileDrafts'
import ProfileAbout from './ProfileAbout'


export default function ProfileNav({user}) {
  return (

<div className='profile-header'>
   
    <Routes>
        <Route>
            <Route index element = {<Profile user={user}/>} />
            <Route path="/posts" element={<ProfilePosts user={user}/>} />
            <Route path="/drafts" element={<ProfileDrafts />} />
            <Route path="/about" element={<ProfileAbout />} />
        </Route>
    </Routes>
</div>

  )
}
