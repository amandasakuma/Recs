import React from 'react'
import RecCard from './RecCard'
export default function Homepage({posts, handleSocial}) {


  return (
    <div className='rec-card-container'>
        {posts.map((post) => 
        <RecCard key={post.id} handleSocial= {handleSocial} post={post}/>)}

    </div>
  )
}
