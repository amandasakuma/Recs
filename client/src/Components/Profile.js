import React from 'react'
import ProfileNav from "./ProfileNav"
import ProfileDrafts from "./ProfileDrafts"
import ProfileAbout from "./ProfileAbout"
import ProfilePosts from "./ProfilePosts"
import { Link, Route, Routes } from "react-router-dom"

export default function Profile() {
  return (
<div>
Profile
{/* <Routes>
      <Route path="/profile" element={<ProfileNav />} />
        <Route path="posts" element={<ProfilePosts />} />
        <Route path="drafts" element={<ProfileDrafts />} />
        <Route path="about" element={<ProfileAbout />} />
      </Route>
</Routes> */}
</div>
  )
}
