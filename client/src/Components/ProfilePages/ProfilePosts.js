import React, {useState, useEffect, useParams} from 'react'
import RecCard from '../RecCard'

import ProfileCard from './ProfileCard'


export default function ProfilePosts({user}) {
console.log(user)
const { posts } = user
console.log(posts)
//   const {id} = useParams
// console.log(id)

// const [userPosts, setUserPosts] = useState([])

//   function getPosts(){
//     let token = localStorage.getItem('token')
//     fetch("/profile/posts", {
//      headers: {
//         'Authorization': `Bearer ${token}`
//      }
//   })
//     .then((res) => res.json())
//     .then ((data) => setUserPosts(data))
//   }
//   useEffect(getPosts, [])


  return (
    <div>
      {posts.map((post) => 
        <ProfileCard key={post.id} post={post}/>)}
  </div>
  )
}
