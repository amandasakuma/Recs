import React from 'react'
import RecCard from './RecCard'
export default function Homepage({posts, onLike, loggedInUser}) {


  return (
    <div className='rec-card-container'>
        {posts.map((post) => 
        <RecCard key={post.id} loggedInUser={loggedInUser} onLike= {onLike} post={post}/>)}

    </div>
  )
}
