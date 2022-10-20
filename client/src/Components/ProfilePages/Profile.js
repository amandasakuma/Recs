import React, {useState, useEffect} from 'react'
import { Routes, Route } from "react-router-dom"
import ProfileNav from './ProfileNav'
import ProfilePosts from './ProfilePosts'
import ProfileDrafts from './ProfileDrafts'
import ProfileAbout from './ProfileAbout'

export default function Profile({user}) {

  // const [user, setUser] = useState([])
  // const token = localStorage.getItem('token')

  // function getProfile(){

  //   fetch("/profiles/following", {
  //     headers: {
  //       'Authorization': `Bearer ${token}`
  //   }
  // })
  //   .then((res) => res.json())
  //   .then ((data) => setUser(data))
  // }
  // useEffect(getProfile, [])



  return (
    <div>
    <Routes>
      <Route path="/profile" element={<ProfileNav user={user}/>}>
        <Route path="posts" index element={<ProfilePosts user={user}/>} />
        <Route path="posts" element={<ProfilePosts user={user}/>} />
        <Route path="drafts" element={<ProfileDrafts />} />
        <Route path="about" element={<ProfileAbout user={user}/>} />
      </Route>
    </Routes>
    </div>
  )
}
