import React from 'react'
import ProfileCard from './ProfilePages/ProfileCard'

export default function UserProfilePosts({user}) {

  const { posts } = user

  return (
    <div>
      {posts.map((post) => 
        <ProfileCard key={post.id} post={post}/>)}
    </div>
  )
}
