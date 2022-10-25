import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import ProfileNav from './ProfileNav'

export default function Profile({loggedInUser}) {
    const [user, setUser] = useState("")
    const token = localStorage.getItem('token')

    const params = useParams();
    console.log(params.username)

    useEffect(() => {
        if(loggedInUser.username == params.username){
            fetch('/me', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((res) => res.json())
            .then((data) => setUser(data))
        } else {
            fetch(`/showprofiles/${params.username}`)
                .then((res) => res.json())
                .then((data) => setUser(data))
        }   
    }, [])


    if(!user) { return <div></div>}


  return (
    <div>
        <ProfileNav loggedInUser={loggedInUser} user={user}/>
    </div>
  )
}
