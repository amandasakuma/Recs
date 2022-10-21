import React from 'react'
import { Outlet, Link } from "react-router-dom"

export default function UserProfile({user}) {
  

return (
<>
{/* <div className='profile-header'>
    <h1>{user.username}</h1>
    <p>Followers {user.follower_count}</p>
    <p>Following {user.following_count}</p>
      <nav className='profile-nav'>
          <Link to='user-profile-posts'>Posts</Link>
          <Link to='/profile/drafts'>Drafts</Link>
          <Link to='user-profile-about'>About</Link>
          
      </nav>   
<Outlet />
</div> */}
</>
  )
}
