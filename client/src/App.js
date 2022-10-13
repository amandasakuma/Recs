import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import Homepage from "./Components/Homepage";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import LoginSignUpPage from "./Components/LoginSignUpPage";
import CardEditor from "./Components/CardEditor"

function App() {
  const [posts, setPosts] = useState([])


  function getPosts(){
    fetch("/posts")
    .then((res) => res.json())
    .then ((data) => setPosts(data))
  }
  useEffect(getPosts, [])

  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Homepage posts={posts}/>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<LoginSignUpPage />} />
      <Route path="/card-editor" element={<CardEditor />} />
    </Routes>
    </div>
  );
}

export default App;
