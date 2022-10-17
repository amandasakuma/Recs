import React, {useState} from 'react'
import EditProfile from './EditProfile'

export default function ProfileAbout({user}) {

const {username, bio, email, profile_pic, password} = user

  let intitialForm= {
    username: username,
    bio: bio,
    email: email,
    // password: password,
    profile_pic: profile_pic,
  }

  const [profileEdits, setProfileEdits] = useState(intitialForm)
  const [showUpdateForm, setShowUpdateForm] = useState(false)

  const handleEdit = (e) => {
        setProfileEdits({
            ...profileEdits,
            [e.target.name]: e.target.value,
        });
    };

  function handleEditClick(){
    setShowUpdateForm(!showUpdateForm)
  }

  function handleProfileEdit(e){
    e.preventDefault();
    fetch('/profile/about', {
      method: 'PATCH', 
      body: JSON.stringify(profileEdits),
      headers: {
        'Content-type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      setShowUpdateForm(!showUpdateForm)
  }


  return (
<>
  {showUpdateForm?
  <form className="form" onSubmit={handleProfileEdit}>

      <h2>Edit Profile</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        defaultValue={username}
        onChange={handleEdit}
      />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        defaultValue={email}
        onChange={handleEdit}
      />

      {/* <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleEdit}
      /> */}

    <label htmlFor="bio">Bio</label>
      <input
        type="text"
        name="bio"
        defaultValue={bio}
        onChange={handleEdit}
      />

      <label htmlFor="profile_pic">Photo</label>
      <input
        type="text"
        name="photo"
        defaultValue={profile_pic}
        onChange={handleEdit}
      />

      <button type="submit">Save</button>
    </form>

    :

    <div className='about'>
      <h2>{user.username}</h2>
      <p>{user.bio}</p>
      <img src={user.profile_pic} />
    </div>
  }
  <button onClick={handleEditClick} >Edit Profile</button>




  
</>
  )
}
