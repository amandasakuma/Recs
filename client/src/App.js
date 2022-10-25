import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"
import Homepage from "./Components/Homepage";
import Header from "./Components/LoginFlow/Header";
import LoginSignUpPage from "./Components/LoginFlow/LoginSignUpPage";
import CardEditor from "./Components/CardEditor"
import Profile from "./Components/ProfilePages/Profile";
import RecCard from "./Components/RecCard";




function App() {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState("")
  const [loggedInUser, setLoggedInUser] = useState('')
  const token = localStorage.getItem('token')


  useEffect(() => {
    if(token && !user.username){
      fetch('/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data){
          setUser(data)
          setLoggedInUser(data)
        }
      })
    }
  }, [])

  function getPosts(){
    fetch("/posts")
    .then((res) => res.json())
    .then ((data) => setPosts(data))
  }
  useEffect(getPosts, [])

    let location = useLocation();

    useEffect(() => {
        console.log(location.pathname)
    }, [location])

  return (
  <>

    <div className="App">

    {location.pathname !== '/login' ? <Header user={user} setUser={setUser}/> :null}

    <Routes>
      <Route path="/" element={<Homepage posts={posts} loggedInUser={loggedInUser}/>} >
      </Route>
      <Route path=":id" element= {<RecCard/>} />
      <Route path="/header" element= {location.pathname !== '/login' ? <Header user={user} setUser={setUser}/> :null} />
      <Route path={"/profile/:username/*"} element={<Profile posts={posts} loggedInUser={loggedInUser}/>} />
      <Route path="/login" element={<LoginSignUpPage user={user} setUser={setUser}/>} />
      <Route path="/card-editor" element={<CardEditor user={user}/>} />
   
    </Routes>
    </div>
  </>
  );
}

export default App;
