import React, {Fragment, useState} from 'react'
import { Routes, Route, NavLink, Link, useNavigate } from "react-router-dom"

export default function Header() {
    const [showLogin, setShowLogin] = useState(true)
    // const [user, setUser] = useState(false)

    // let navigate = useNavigate();

    let activeStyle = {
        textDecoration: "underline"
    }

    function handleLoginClick(){
        setShowLogin(!showLogin);
        // navigate("/login")
    }

  return (
<Fragment>
        <nav className='nav'>

            {/* {user ? ( */}
                <>
                  <NavLink 
                        to="/"
                        style={({isActive}) => 
                            isActive ? activeStyle : null
                            }
                    > Home
                    </NavLink>
                    <NavLink 
                        to="/card-editor"
                        style={({isActive}) => 
                            isActive ? activeStyle : null
                            }
                    > Create Rec
                    </NavLink>
                    <NavLink 
                        to="/profile"
                        style={({isActive}) => 
                            isActive ? activeStyle : null
                        }
                    > Profile
                    </NavLink>
                </>     
            {/* ) : ( */}
               <>
                {/* {showLogin? */}
                    <NavLink className='login-button' 
                        to="/login" >
                        {/* <button onClick={handleLoginClick}>  */}
                        Login
                        {/* </button> */}
                    </NavLink> 
                {/* : null} */}
                </>
            {/* )} */}
        </nav>
            
   </Fragment>    
  )
}
 