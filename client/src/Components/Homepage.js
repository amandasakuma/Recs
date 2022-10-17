import React from 'react'
import RecCard from './RecCard'
export default function Homepage({posts}) {


  return (
    <div className='rec-card-container'>
        {posts.map((post) => 
        <RecCard key={post.id} post={post}/>)}

    </div>
  )
}
