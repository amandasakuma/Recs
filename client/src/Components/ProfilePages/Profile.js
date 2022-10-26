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
            // .then(loggedInUser.following.find(element => {
            //     return element.id === user.id
            //     }))
        } else {
            fetch(`/showprofiles/${params.username}`)
                .then((res) => res.json())
                .then((data) => setUser(data))
        }   
    }, [])


    if(!user) { return <div></div>}


    // if(user) {const {following} = user}
  return (
    <div>
        <ProfileNav loggedInUser={loggedInUser} params={params} user={user}/>
    </div>
  )
}
