import React, {useState, useRef} from 'react'

export default function CardEditor({user}) {

  const initialForm = {
    hed: "",
    dek: "",
    content: "",
    draft: true,
    pub_date: "",
    user_id: ""
  }
    // const ref = useRef(null);
  // let navigate = useNavigate();

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
    // navigate('/login-form')
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
        <button type="submit" onSubmit={handlePublish}>Publish</button>
      </form>
    </div>
  )
}
