import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import ProfileNav from './ProfileNav'

export default function Profile() {
    const [user, setUser] = useState(null)
    const token = localStorage.getItem('token')

    const params = useParams();
    console.log(params.username)

    function getUser(){
        if(!token){
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
    }
    



    // function getUser(){
    //     if(token && !user.username){
    //         fetch('/me', {
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     })
        

    //     fetch(`/showprofiles/${params.username}`)
    //         .then((res) => res.json())
    //         .then((data) => setUser(data))

    // }
    useEffect(getUser, [])

    if(!user) { return <div></div>}

  return (
    <div>
        <ProfileNav  user={user}/>
    </div>
  )
}
