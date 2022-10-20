import React, {useState, useEffect} from 'react'
import ProfileCard from './ProfileCard'

export default function ProfilePosts({user}) {

// const [userPosts, setUserPosts] = useState([])

  // function getPosts(){
  //   let token = localStorage.getItem('token')
  //   fetch("/profile/posts", {
  //    headers: {
  //       'Authorization': `Bearer ${token}`
  //    }
  // })
  //   .then((res) => res.json())
  //   .then ((data) => setUserPosts(data))
  // }
  // useEffect(getPosts, [])
console.log(user)

  return (
    <div>
      
      {/* {userPosts.map((post) => 
        <ProfileCard key={post.id} post={post}/>
)}  */}
  </div>
  )
}
