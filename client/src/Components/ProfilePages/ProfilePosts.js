import React, {useState, useEffect} from 'react'
import RecCard from '../RecCard'


export default function ProfilePosts() {

const [userPosts, setUserPosts] = useState([])

  function getPosts(){
    let token = localStorage.getItem('token')
    fetch("/profile/posts", {
     headers: {
        'Authorization': `Bearer ${token}`
     }
  })
    .then((res) => res.json())
    .then ((data) => setUserPosts(data))
  }
  useEffect(getPosts, [])


  return (
    <div>
      
      {userPosts.map((post) => 
        <RecCard key={post.id} post={post}/>)}
  </div>
  )
}
