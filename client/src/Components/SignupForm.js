import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

export default function SignupForm() {
  const intialForm = {
    username: "",
    email: "",
    password: "",
  }

  let navigate = useNavigate();

  const [formData, setFormData] = useState(intialForm)

   const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


  function handleSignup(e) {
    e.preventDefault();
    fetch('/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)}).then((res) => {
            if (res.ok) {
                res.json()
            } else {
                res.json().then((errors) => {
                console.error(errors);
            });
        }
    });
    setFormData(intialForm);
    navigate('/login-form')
  }

  return (
    <form className="form" onSubmit={handleSignup}>
      {/* <img className="login-logo" src={logo} /> */}
      <h2>Recs</h2>
        <label> Username </label>
            <input 
                type='text' 
                name='username' 
                value={formData.username} 
                onChange={handleChange} 
            />

            <label> Email </label>
            <input 
                type='text' 
                name='email' 
                value={formData.email} 
                onChange={handleChange} 
            />
      
            <label> Password </label>
            <input 
                type='password' 
                name='password' 
                value={formData.password} 
                onChange={handleChange} 
            />
        <button type="submit">Submit</button>
      </form>
  )
}
