import React, {useState, useEffect, useParams} from 'react'
import {Link } from "react-router-dom"

export default function RecCard({post}) {
  const [selectUser, setSelectUser] = useState("")

  const {hed, dek, pretty_time, content, like_count, user} = post
  // function getUserProfile(){
  //   fetch(`/profiles${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setSelectUser(data))
  // }

  // const { id } = useParams();

  // useEffect(() => {
  //   fetch(`http://localhost:4000/projects/${id}`)
  //     .then((r) => r.json())
  //     .then((project) => {
  //       setProject(project);
  //     });
  // }, [id]);


  return (
    <div className='rec-card'>
        <div className='card-body'>
     
            <h2>{hed}</h2>
            <p>{dek}</p>
            <Link to={`/profile/${user.id}`}>
              <span>By: {user.username}</span>
            </Link>
            <span>Published On: {pretty_time}</span>
            {/* <p>{post.pub_date}</p> */}
            <p id="body" >{content}</p>
            <button> Like</button>
            <p>{like_count} likes</p>
        </div>
    </div>
  )
}
