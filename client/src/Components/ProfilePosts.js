import React, {useState, useEffect} from 'react'
import RecCard from './RecCard'

export default function ProfilePosts({user}) {
const {posts} = user
// const [userPosts, setUserPosts] = useState([])

  // function getPosts(){
  //   fetch("/profile/posts")
  //   .then((res) => res.json())
  //   .then ((data) => setUserPosts(data))
  // }
  // useEffect(getPosts, [])


  return (
    <div>ProfilePosts
      {/* {posts.map((post) => 
        <RecCard key={post.id} post={post}/>)} */}


  </div>
  )
}
