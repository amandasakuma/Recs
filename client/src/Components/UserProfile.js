import React from 'react'
import UserProfileAbout from './UserProfileAbout'
import UserProfileNav from './UserProfileNav'
import UserProfilePosts from './UserProfilePosts'


export default function UserProfile({posts}) {
  return (
    <div>
    <Routes>
      <Route path="/user-profile-home" element={<UserProfileNav posts={posts}/>}>
        <Route index element={<UserProfilePosts posts={posts}/>} />
        <Route path="user-profile-posts" element={<UserProfilePosts posts={posts}/>} />
        <Route path="user-profile-about" element={<UserProfileAbout posts={posts}/>} />
      </Route>
    </Routes>


    </div>
  )
}
