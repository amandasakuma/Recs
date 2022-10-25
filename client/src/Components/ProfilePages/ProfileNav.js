import React from 'react'
import { Link, Outlet, Routes, Route, } from "react-router-dom"
import ProfilePosts from './ProfilePosts'
import ProfileAbout from './ProfileAbout'
import ProfileCardEditor from './ProfileCardEditor'


export default function ProfileNav({user, loggedInUser}) {
    const token = localStorage.getItem('token')
    const follows = loggedInUser.following.find(element => {
        return element.id === user.id
    })

    function handleFollow(){
        fetch('/create-follow', {
            method: 'POST',
            headers:  {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json",   
        },
        body: JSON.stringify({followed_id:user.id, follower_id:loggedInUser.id})
        })
        .then((res) => {
            if (res.ok){
                res.json()
            .then((data) => console.log('success:', data))
            }
        })
    }

    function handleUnFollow(){
        fetch('/unfollow', {
            method: 'DELETE',
            headers:  {
        'Authorization': `Bearer ${token}`
        },
        })
        .then(res => res.json())
        .then(res => console.log(res))
            alert("Unfollowed user")}


  return (
 <>
<div className='profile-header'>
    <img className="profile-avatar" src={user.profile_pic} />
    <h1>{user.username}</h1>
    <div className='profile-follows'>
        <span>Followers {user.follower_count}</span>
        <span>|</span>
        <span>Following {user.following_count}</span>
        {follows ? 
            <button onClick={handleUnFollow}>Yes</button>
                :
            <button onClick={handleFollow} >Follow</button>
        }
    </div>    
    
      <nav className='profile-nav'>
          <Link to={`/profile/${user.username}/posts`}>Posts</Link>
          <Link to={`/profile/${user.username}/about`}>About</Link>
          
      </nav>   
<Outlet />
    <Routes>
        <Route path="posts" element={<ProfilePosts loggedInUser={loggedInUser} user={user}/>}/>
        <Route path="about" element={<ProfileAbout user={user} loggedInUser={loggedInUser}/>} />
        {/* <Route path="edit" element={<ProfileCardEditor user={user} loggedInUser={loggedInUser}/>} /> */}
    </Routes>
</div>
</> 
)
} 
