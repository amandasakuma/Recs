import React from 'react'
import ProfileCard from './ProfileCard'


export default function ProfilePosts({user}) {

  const { posts } = user


  return (
    <div>
      {posts.map((post) => 
        <ProfileCard key={post.id} user={user} post={post}/>)}
    </div>
  )
}
