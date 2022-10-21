import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import ProfileNav from './ProfileNav'

export default function Profile() {
    const [user, setUser] = useState(null)

    const {id} = useParams();
    console.log(id)

    function getUser(){
        fetch(`/profiles/${id}`)
            .then((res) => res.json())
            .then((data) => setUser(data))

    }
    useEffect(getUser, [id])

    if(!user) { return <div></div>}
    console.log(user)
    const {posts} = user
    console.log(posts)


  return (
    <div>
        <ProfileNav id={id} user={user}/>
    </div>
  )
}
