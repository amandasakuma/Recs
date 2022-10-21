import React from 'react'
import {Link } from "react-router-dom"

export default function ProfileCard({post}) {
  const {hed, dek, pretty_time, content, like_count, author} = post
  return (
    <div className='rec-card'>
        <div className='card-body'>
     
            <h2>{hed}</h2>
            <p>{dek}</p>
            <span>By: {author.username}</span>
            <span>Published On: {pretty_time}</span>
            <p id="body" >{content}</p>
            <button> Like</button>
            <p>{like_count} likes</p>
        </div>
    </div>
  )
}
