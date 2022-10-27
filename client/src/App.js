import { useState, useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom"
import Homepage from "./Components/Homepage";
import Header from "./Components/LoginFlow/Header";
import LoginSignUpPage from "./Components/LoginFlow/LoginSignUpPage";
import CardEditor from "./Components/CardEditor"
import Profile from "./Components/ProfilePages/Profile";
import RecCard from "./Components/RecCard";
import TagsContainer from "./Components/TagsContainer";




function App() {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState("")
  const [loggedInUser, setLoggedInUser] = useState('')
  const [liked, setLiked] = useState(false);
  const token = localStorage.getItem('token')
  const [filteredPosts, setFilteredPosts] = useState("")
  const [followFeed, setFollowFeed] = useState("")


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


  function getLikes(likedPost){
    let newArray = [...posts]
    newArray.map((post) => {
      return post.id === likedPost.id ? post.like_count = post.like_count +1 : post 
    })
    setPosts(newArray)
  }

    let location = useLocation();

    useEffect(() => {
        console.log(location.pathname)
    }, [location])



  let diningTag = posts.filter((post) => {
  return post.tags === "food/dining" 
}) 


let experiencesTag = posts.filter((post) => {
  return post.tags === "experiences"
})

let productsTag = posts.filter((post) => {
  return post.tags === "products"
})

  return (
  <>

    <div className="App">

    {location.pathname !== '/login' ? <Header user={user} setUser={setUser}/> :null}

    <Routes>
      <Route path="/" element={<Homepage getLikes={getLikes} posts={posts} loggedInUser={loggedInUser}/>} />
 
      <Route path="/tags/experiences" 
        element=
          {<TagsContainer 
            tagFeed={experiencesTag}
            posts={posts} 
            loggedInUser={loggedInUser}/>} 
          /> 

        <Route path="/tags/food" 
          element={<TagsContainer
            tagFeed={diningTag}
            posts={posts} 
            loggedInUser={loggedInUser}/>} 
          />
        <Route path="/tags/products" 
          element={<TagsContainer
            tagFeed={productsTag}
            posts={posts} 
            loggedInUser={loggedInUser}/>} 
          />

          <Route path="/tags/following" 
          element={<TagsContainer
            tagFeed={followFeed}
            posts={posts} 
            loggedInUser={loggedInUser}/>} 
          />




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
