import React from 'react'
import {Link } from "react-router-dom"

export default function ProfileCard({post, user}) {
  const {hed, dek, pretty_time, content, like_count} = post
console.log(post)
  return (
    <div className='rec-card'>
        <div className='card-body'>
     
            <h2>{hed}</h2>
            <p>{dek}</p>
            <span>By: {user.username}</span>
            <span>Published On: {pretty_time}</span>
            <p id="body" >{content}</p>
            <button> Like</button>
            <p>{like_count} likes</p>
        </div>
    </div>
  )
}
