import React, {useState, useEffect, useParams} from 'react'
import {Link } from "react-router-dom"

export default function RecCard({post, loggedInUser}) {
  const token = localStorage.getItem('token')
  const {hed, dek, pretty_time, content, like_count, user} = post

    const liked = post.likes.find(element => {
      return element.user_id === loggedInUser.id
  })

  function handleLike(){
    fetch('/create-like', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json",   
      },
      body: JSON.stringify({post_id:post.id, user_id:user.id})
    })
      .then((res) => {
      if (res.ok){
        res.json()
      .then((data) => console.log('success:', data))
      }
    })
  }


  return (
    <div className='rec-card'>
        <div className='card-body'>
     
            <h2>{hed}</h2>
            <p>{dek}</p>
            <Link to={`/profile/${user.username}`}>
              <img className="avatar" src={user.profile_pic} />
              <span>  {user.username}</span>
            </Link>
            <span>Published On: {pretty_time}</span>
            <p id="body" >{content}</p>
            {liked ? 
                <button>Co-signed</button>
                :
                <button onClick={handleLike}>Co-sign</button>
              }
            <p>{like_count}</p>
        </div>
    </div>
  )
}
