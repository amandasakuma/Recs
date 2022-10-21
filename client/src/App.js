import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import Homepage from "./Components/Homepage";
import Header from "./Components/LoginFlow/Header";
import LoginSignUpPage from "./Components/LoginFlow/LoginSignUpPage";
import CardEditor from "./Components/CardEditor"
import Profile from "./Components/ProfilePages/Profile";
// import ProfileNav from "./Components/ProfilePages/ProfileNav";
// import ProfileDrafts from "./Components/ProfilePages/ProfileDrafts"
// import ProfileAbout from "./Components/ProfilePages/ProfileAbout"
// import ProfilePosts from "./Components/ProfilePages/ProfilePosts"
// import UserProfile from "./Components/UserProfileNav";
import RecCard from "./Components/RecCard";


function App() {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState("")
  const token = localStorage.getItem('token')


  useEffect(() => {
    if(token && !user.username){
      fetch('/profile', {
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
        res.json()
      .then((data) => console.log('success:', data))
      }
    })
  }

  return (
  <>
    <div className="App">
    <Header user={user} setUser={setUser}/>    
    <Routes>
      <Route path="/" element={<Homepage posts={posts} handleSocial= {handleSocial}/>} >
      </Route>
      <Route path=":id" element= {<RecCard/>} />
      <Route path={"/profile/:id/*"} element={<Profile  />} />
      <Route path="/login" element={<LoginSignUpPage user={user} setUser={setUser}/>} />
      <Route path="/card-editor" element={<CardEditor user={user}/>} />
    </Routes>
    </div>
  </>
  );
}

export default App;
