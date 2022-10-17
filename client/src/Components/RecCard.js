import React from 'react'


export default function RecCard({post}) {
  return (
    <div className='rec-card'>
        <div className='card-body'>
            <h1>{post.hed}</h1>
            <h3>{post.dek}</h3>
            <span>By: {post.user.username}</span>
            <span>Published On: {post.pretty_time}</span>
            {/* <p>{post.pub_date}</p> */}
            <p id="body" >{post.content}</p>
        </div>
    </div>
  )
}
