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
            <p className="signup">
                Don't have an account? 
                <p className="signup-button" onClick={() => setShowLogin(false)}>
                    Sign up
                </p>
            </p>
        </div>
        ) : (
            <div >
                <SignupForm user={user} setUser={setUser} />
                <p className="signup">
                    Already have an account?
                    <p className="signup-button" onClick={() => setShowLogin(true)}>
                    Sign in
                    </p>
                </p>
            </div>
        )}
    </div>
  )
}
  
