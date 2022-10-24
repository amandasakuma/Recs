import React, {useState, useEffect, useParams} from 'react'
import {Link } from "react-router-dom"

export default function RecCard({post, loggedInUser}) {



  const {hed, dek, pretty_time, content, like_count, user} = post


  // function mappedLikes(){ 
  //     let newarray = post.likes.map((like) => {
  //       console.log(`${post.hed} is liked by ${like.user_id}`)
  //       if (like.user_id === loggedInUser.id){
  //         return {...post, liked: true}
  //       } else {
  //         return null
  //       }
  //  console.log(newarray)
  //   }



    const liked = post.likes.find(element => {
      return element.user_id === loggedInUser.id
  })


    // useEffect(mappedLikes, [])

  // function handleLike(id){
  //   fetch('/likes', {
  //     method: 'POST',
  //     headers: {
  //       'Authorization': `Bearer ${token}`
  //     },
  //     body: JSON.stringify({post_id:id, user_id:user.id})
  //   })
  //     .then((res) => {
  //     if (res.ok){
  //       res.json()
  //     .then((data) => console.log('success:', data))
  //     }
  //   })
  // }


 
//   let loggedInUserLiked = post.likes.map(like => {
//     if (loggedInUser.id === like.user_id) {
//     console.log("true")
//   } else {
//     console.log("false")
//   }
// }) 
// console.log(loggedInUserLiked)

// console.log(

// let likeCheck = post.likes.map((like) => {
//     return loggedInUser.id === like.user_id
//   }))



// let userLiked = likes.find(element => {
//    return element.user_id === loggedInUser.id 
//   })

// console.log(userLiked) 

  return (
    <div className='rec-card'>
        <div className='card-body'>
     
            <h2>{hed}</h2>
            <p>{dek}</p>
            <Link to={`/profile/${user.username}`}>
              <img className="avatar" src={user.profile_pic} />
              <span>  {user.username}</span>
            </Link>
            <span>Published On: {pretty_time}</span>
            {/* <p>{post.pub_date}</p> */}
            {/* <p id="body" >{content}</p>
            <button> {
              loggedInUserLiked ? "Liked" : "like"


            }</button> */}
 
            {/* <button>{!loggedInUserLiked ? "Liked": "Like"}</button> */}
            {/* {liked ? <p>{loggedInUser.username} likes</p> : null}
            <p>liked? </p> */}
            {/* <button>
                {post.likes.map((like) => {
                  if(like.user_id === loggedInUser.id){
                    return "Liked"
                  } else {
                    return "Like"
                  } 
                })
              }

            </button> */}
            <button>{liked ? "Co-signed" : "like"}</button>
        </div>
    </div>
  )
}
