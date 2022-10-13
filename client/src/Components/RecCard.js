import React from 'react'


export default function RecCard({post}) {
  return (
    <div className='rec-card'>
        <div className='card-body'>
            <h1>{post.hed}</h1>
            <h3>{post.dek}</h3>
            <p>By: {post.author.username}</p>
            <p>{post.pub_date}</p>
            <p>{post.content}</p>
        </div>
    </div>
  )
}
