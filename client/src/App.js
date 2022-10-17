import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import Homepage from "./Components/Homepage";
import Header from "./Components/Header";
import LoginSignUpPage from "./Components/LoginSignUpPage";
import CardEditor from "./Components/CardEditor"
import ProfileNav from "./Components/ProfileNav";
import Profile from "./Components/Profile"
import ProfileDrafts from "./Components/ProfileDrafts"
import ProfileAbout from "./Components/ProfileAbout"
import ProfilePosts from "./Components/ProfilePosts"

function App() {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState("")

  useEffect(() => {
    let token = localStorage.getItem('token')
    if(token && !user.username){
      fetch('/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.user){
          setUser(data.user)
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

  return (
  <>
    <div className="App">
    <Header user={user} setUser={setUser}/>
    <Routes>
      <Route path="/" element={<Homepage posts={posts}/>} />
      <Route path="/profile" element={<ProfileNav user={user}/>}>
        <Route index element={<Profile />} />
        <Route path="posts" element={<ProfilePosts user={user} />} />
        <Route path="drafts" element={<ProfileDrafts />} />
        <Route path="about" element={<ProfileAbout user={user}/>} />
      </Route>

      <Route path="/login" element={<LoginSignUpPage user={user} setUser={setUser}/>} />
      <Route path="/card-editor" element={<CardEditor user={user}/>} />
    </Routes>
    </div>
  </>
  );
}

export default App;
