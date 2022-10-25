import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"

export default function LoginForm({user, setUser}) {

  const intialForm = {
    username: "",
    password: "",
  }
  let navigate = useNavigate();

  const [formData, setFormData] = useState(intialForm)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleLogin(e){
    e.preventDefault()
    fetch('/login', {
      method: "POST",
      headers: {
        'Content-type': "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        setUser(data.user)
        localStorage.setItem('token', data.token)
    })
    .catch(err => console.log(err))
    navigate('/')
  }

  return (
   <form className="login-form" onSubmit = {handleLogin}>
      {/* <img className="login-logo" src={logo} /> */}
      <h2>Recs</h2>
      {/* <label htmlFor="username">Username</label> */}
      <input
        type="text"
        name="username"
        placeholder='Username'
        value={formData.username}
        onChange={handleChange}
      />
      {/* <label htmlFor="password">Password</label> */}
      <input
        type="password"
        name="password"
        placeholder='Password'
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">LOGIN</button>
    </form>
  )
}
