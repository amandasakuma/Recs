import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import Homepage from "./Components/Homepage";
import Header from "./Components/LoginFlow/Header";
import CardEditor from "./Components/CardEditor"
import Profile from "./Components/ProfilePages/Profile";
import LoginSignUpPage from "./Components/LoginFlow/LoginSignUpPage";


function App() {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState('')
  const token = localStorage.getItem('token')

  useEffect(() => {
    if(token && !user.username){
      fetch("/me", {
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


  function handleSocial(id){
    fetch('/social-interactions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({post_id:id, user_id:user.id})
    })
      .then((res) => {
      if (res.ok){
        res.json().then((data) => console.log('success:', data))
      }
    })
  }

  return (
  <>
    
    <div className="App">
    <Header user={user} setUser={setUser}/>
    
    <Routes>
      <Route path="/" element={<Homepage posts={posts} handleSocial= {handleSocial}/>} />
      <Route path="/card-editor" element={<CardEditor user={user}/>} />
      <Route path="/login" element={<LoginSignUpPage setUser={setUser}/>} />
    </Routes>
<Profile user={user} />
    </div>
  </>
  );
}

export default App;
