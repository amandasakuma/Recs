import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"

export default function CardEditor({user}) {

  const initialForm = {
    hed: "",
    dek: "",
    content: "",
    draft: true,
    pub_date: "",
    user_id: "",
    link: "",
    photo: "",
    tags: ""
  }
    // const ref = useRef(null);
  let navigate = useNavigate();

  const [newPost, setNewPost] = useState(initialForm)


  function handlePostChange(e){
    setNewPost({
      ...newPost, [e.target.name]: e.target.value
    }) 
  }

  function handlePublish(e) {
    e.preventDefault();
    fetch('/posts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...newPost, user_id: user.id}),
      })
      .then((res) => {
        if (res.ok) {
            res.json()
            .then((data) => console.log('Success:', data))
        } else {
            res.json().then((errors) => {
              console.error(errors);
          });
        }
    });
    setNewPost(initialForm);
    navigate('/')
  }


  return (
    <div>
      <form className="card-editor" onSubmit={handlePublish}>
            <input 
                type='text' 
                name='hed' 
                placeholder='headline'
                value={newPost.hed} 
                onChange={handlePostChange} 
            />
            <input 
                type='text' 
                name='dek' 
                placeholder='description'
                value={newPost.dek} 
                onChange={handlePostChange} 
            />
            <textarea
              name='content'
              id='card-editor-body'
              value={newPost.content}
              onChange={handlePostChange}
            />
              <input 
                type='text' 
                name='link' 
                placeholder='link'
                value={newPost.link} 
                onChange={handlePostChange} 
            />

              <input 
                type='text' 
                name='photo' 
                placeholder='photo'
                value={newPost.photo} 
                onChange={handlePostChange} 
              />

              <input 
                type='text' 
                name='tag' 
                placeholder='tag'
                value={newPost.tag} 
                onChange={handlePostChange} 
              />
        <button type="submit" onSubmit={handlePublish}>Publish</button>
      </form>
    </div>
  )
}
