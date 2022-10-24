import React from 'react'
import { Link, Outlet, Routes, Route, } from "react-router-dom"
import ProfilePosts from './ProfilePosts'
import ProfileAbout from './ProfileAbout'


export default function ProfileNav({user, loggedInUser}) {
    const {following} = loggedInUser

    // const followedUsers = () => {
    //     following.map((id))
    // }
  return (
 <>
<div className='profile-header'>
    <img className="profile-avatar" src={user.profile_pic} />
    <h1>{user.username}</h1>
    <div className='profile-follows'>
        <span>Followers {user.follower_count}</span>
        <span>|</span>
        <span>Following {user.following_count}</span>
    </div>
    {/* {following.id === user.id ? <button className='follow-button'>Following</button> : <button className='follow-button'>Follow</button>} */}
    
    
      <nav className='profile-nav'>
          <Link to={`/profile/${user.username}/posts`}>Posts</Link>
          <Link to={`/profile/${user.username}/about`}>About</Link>
          
      </nav>   
<Outlet />
    <Routes>
        <Route path="posts" element={<ProfilePosts user={user}/>}/>
        <Route path="about" element={<ProfileAbout user={user} loggedInUser={loggedInUser}/>} />
    </Routes>
</div>
</> 
)
} 
