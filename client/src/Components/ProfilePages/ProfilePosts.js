import React from 'react'
import ProfileCard from './ProfileCard'


export default function ProfilePosts({user, loggedInUser}) {

  const { posts } = user


  return (
    <div className='profile-posts-container'>
      {posts.map((post) => 
        <ProfileCard key={post.id} user={user} post={post} loggedInUser={loggedInUser}/>)}
    </div>
  )
}
