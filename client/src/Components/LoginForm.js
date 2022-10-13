import React from 'react'


export default function LoginForm() {
  return (
   <form className="form" >
      {/* <img className="login-logo" src={logo} /> */}
      <h2>Recs</h2>
      <label htmlFor="username">Email</label>
      <input
        type="text"
        name="email"
        // value={formData.email}
        // onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        // value={formData.password}
        // onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  )
}
