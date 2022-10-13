import React from 'react'

export default function SignupForm() {
  return (
    <form className="form" >
      {/* <img className="login-logo" src={logo} /> */}
      <h2>Recs</h2>
        <label> Name </label>
            <input 
                type='text' 
                name='name' 
                // value={formData.name} 
                // onChange={handleChange} 
            />

            <label> Email </label>
            <input 
                type='text' 
                name='email' 
                // value={formData.email} 
                // onChange={handleChange} 
            />
      
            <label> Password </label>
            <input 
                type='password' 
                name='password' 
                // value={formData.password} 
                // onChange={handleChange} 
            />
        <button type="submit">Submit</button>
      </form>
  )
}
