import React from 'react'

export default function EditProfile() {
  return (
    <form className="form">

      <h2>Edit Profile</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        // value={formData.username}
        // onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        // value={formData.password}
        // onChange={handleChange}
      />

    <label htmlFor="bio">Bio</label>
      <input
        type="text"
        name="bio"
        // value={formData.password}
        // onChange={handleChange}
      />

      <label htmlFor="profile_pic">Photo</label>
      <input
        type="image"
        name="photo"
        // value={formData.password}
        // onChange={handleChange}
      />

      <button type="submit">Save</button>
    </form>
  )
}
