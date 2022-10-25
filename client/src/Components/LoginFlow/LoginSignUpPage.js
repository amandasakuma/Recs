import React, {useState} from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

export default function LoginSignUpPage({user, setUser}) {

    const [showLogin, setShowLogin] = useState(true);

  return (
    <div className='login-page'>
        {showLogin ? (
        <div>
            <LoginForm user={user} setUser={setUser} />
            <p>
                Don't have an account? 
                <button onClick={() => setShowLogin(false)}>
                    Sign up
                </button>
            </p>
        </div>
        ) : (
            <div>
                <SignupForm user={user} setUser={setUser} />
                <p>
                    Already have an account?
                    <button onClick={() => setShowLogin(true)}>
                    Sign in
                    </button>
                </p>
            </div>
        )}
    </div>
  )
}
  
