import React from 'react'
import UserProfileAbout from './UserProfileAbout'
import UserProfileNav from './UserProfileNav'
import UserProfilePosts from './UserProfilePosts'


export default function UserProfile({user}) {
  return (
    <div>
hello?
 <>
  <div className='profile-header'>  
    <h1>{user.username}</h1>
    <p>Followers {user.follower_count}</p>
    <p>Following {user.following_count}</p>
      <nav className='profile-nav'>
          <Link to="/profile/me/posts">Posts</Link>
          <Link to="/profile/me/about">About</Link>
          
      </nav>   
<Outlet />
    <Routes>
        <Route path="/me/posts" element={<UserProfilePosts user={user}/>}/>
        <Route path="/me/about" element={<UserProfileAbout user={user}/>} />
    </Routes>
</div>
</> 
    {/* <Routes>
      <Route path="/user-profile-home" element={<UserProfileNav posts={posts}/>}>
        <Route index element={<UserProfilePosts posts={posts}/>} />
        <Route path="user-profile-posts" element={<UserProfilePosts posts={posts}/>} />
        <Route path="user-profile-about" element={<UserProfileAbout posts={posts}/>} />
      </Route>
    </Routes> */}


    </div>
  )
}
