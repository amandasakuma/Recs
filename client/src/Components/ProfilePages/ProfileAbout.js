import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"

export default function ProfileAbout({user, loggedInUser}) {
 let navigate = useNavigate();

  const {username, bio, email, profile_pic} = user

  let intitialForm= {
    username: username,
    bio: bio,
    email: email,
    profile_pic: profile_pic,
  }

  const [profileEdits, setProfileEdits] = useState(intitialForm)
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const token = localStorage.getItem('token')

  if(!user) { return <div></div>}

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
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      setShowUpdateForm(!showUpdateForm)
      navigate(`/profile/${user.id}`)
  }

  function handleDelete(){
    fetch(`/users/${user.id}`, {
      method: 'DELETE',
      'Authorization': `Bearer ${token}`
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }


  return (
<>
  {showUpdateForm?
  <form className="profile-form" onSubmit={handleProfileEdit}>

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

    <label htmlFor="bio">Bio</label>
      <input
        type="text"
        name="bio"
        defaultValue={bio}
        onChange={handleEdit}
      />

    <label htmlFor="avatar">Avatar</label>
      <input
        type="text"
        name="profile_pic"
        defaultValue={profile_pic}
        onChange={handleEdit}
      />

      <button type="submit">Save</button>
    </form>

    :

    <div className='profile-about'>
      <h2 className='profile-about'>{user.username}</h2>
      <p className='profile-about'>{user.bio}</p>
      {/* <img src={user.profile_pic} /> */}
      {/* <p>Followers {user.follower_count}</p> */}
    </div>
  }

  {loggedInUser.id === user.id ?
  <>
    <button className="edit-profile-button" onClick={handleEditClick} >Edit Profile</button>
    {/* <button onClick={handleDelete} >Delete Profile</button>  */}
  </>
    : null}
 
</>
  )
}
