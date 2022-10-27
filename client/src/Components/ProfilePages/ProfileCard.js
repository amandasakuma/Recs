import React, {useState} from 'react'
import {Link } from "react-router-dom"
import Microlink from '@microlink/react'
import { useNavigate } from "react-router-dom"

export default function ProfileCard({post, user, loggedInUser}) {
  const {hed, dek, pretty_time, content, like_count, id, link, tags, photo} = post


  let initialPost = {
    hed: hed,
    dek: dek,
    content: content,
    link: link,
    photo: photo,
    tags: tags
  }

  const [postEdits, setPostEdits] = useState(initialPost)
  const [showEditPost, setShowEditPost] = useState(false)
  const token = localStorage.getItem('token')

  function handleEditClick(){
    setShowEditPost(!showEditPost)
  }

  const handleEdit = (e) => {
    setPostEdits({
      ...postEdits,
      [e.target.name]: e.target.value
    })
  }

  function handlePostEdit(e){
    e.preventDefault();
    fetch(`/posts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(postEdits),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      setShowEditPost(!showEditPost)
  }
 let navigate = useNavigate();

    function handleDelete(){
      fetch(`/posts/${id}`, {
          method: 'DELETE',
          headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
                })
        .then(res => res.json())
        .then(res => console.log(res))
          navigate('/')
          }
        
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
    }
  //   const liked = post.likes.find(element => {
  //     return element.user_id === loggedInUser.id
  // })

  return (
    <div className='rec-card'>

      {!showEditPost ? 
        <div className='card-body'>
     
            <h2>{hed}</h2>
            <p>{dek}</p>
            <span>By: {user.username}</span>
            <span>Published On: {pretty_time}</span>
            <img className="rec-photo" src={photo} />
            <p id="body" >{content}</p>
              {link?
            <Microlink url={link} size='large'/>
            : null
            }
                {/* {liked ? 
                  <img className="cosign-rex" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                  :
                     <img onClick={handleLike} className="no-cosign-rex" src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" />
                }
              <p className='like-count'>{like_count}</p>
            <p>{like_count} likes</p> */}
            {loggedInUser.id === user.id ?
              <>
                <button className="edit-post-button" onClick={handleEditClick} >Edit Post</button>
              <button  className="delete-post-button" style={{"backgroundColor": "#95a4ff"}} onClick={handleDelete}>Delete Post</button> 
              </>
              : null}
        </div>
          : 
        <form className="card-editor" onSubmit={handlePostEdit}>
            <input 
                type='text' 
                name='hed' 
                placeholder='headline'
                defaultValue={hed} 
                onChange={handleEdit} 
            />
            <input 
                type='text' 
                name='dek' 
                placeholder='description'
                defaultValue={dek} 
                onChange={handleEdit} 
            />
            <textarea
              name='content'
              id='card-editor-body'
              defaultValue={content}
              onChange={handleEdit}
            />
            <input 
                type='text' 
                name='link' 
                placeholder='link'
                defaultValue={link} 
                onChange={handleEdit} 
            />

              <input 
                type='text' 
                name='photo' 
                placeholder='photo'
                defaultValue={photo} 
                onChange={handleEdit} 
            />

              <input 
                type='text' 
                name='tags' 
                placeholder='tags'
                defaultValue={tags} 
                onChange={handleEdit} 
            />

        <button type="submit" onSubmit={handlePostEdit}>Publish</button>
      </form>




        }
    </div>
  )
}
