import React, {useState, useEffect, useParams} from 'react'
import {Link } from "react-router-dom"
import Microlink from '@microlink/react'
import logo from './LoginFlow/logo.png'


export default function RecCard({post, loggedInUser, onLike, getLikes}) {
  const [postLikes, setPostLikes] = useState("")
  const token = localStorage.getItem('token')
  const {hed, dek, pretty_time, content, like_count, user, link, photo} = post

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
      .then(res => res.json())
      .then(data => {
        console.log('success:', data)
        if(data){
        }
      })
      getLikes(post)
    }




  return (
    <div className='rec-card'>
        <div className='card-body'>
      <div className='card-cosign'>
              {liked ? 
                  <img className="cosign-rex" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                  :
                     <img onClick={handleLike} className="no-cosign-rex" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                }
              <p>{like_count}</p>
            </div>  
            <h2 id="card-hed">{hed}</h2>
     
            <p>{dek}</p>
            <Link to={`/profile/${user.username}/posts`}>
              <img className="avatar" src={user.profile_pic} />
              <span>{user.username}</span>
            </Link>
            <img className="rec-photo" src={photo} />
            <p id="body" >{content}</p>
            {link?
            <Microlink url={link} size='large'/>
            : null
            }
            <span>{pretty_time}</span>
            {/* <span>#{tags}</span>   */}
      
        </div>
    </div>
  )
}
