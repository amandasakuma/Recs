import React from 'react'
import RecCard from './RecCard'
import {Link } from "react-router-dom"
import TagsContainer from './TagsContainer'

export default function Homepage({posts, onLike, loggedInUser, postTags}) {

  let tagFeed = posts.filter((post) => {
  return post.tags === "food/dining";

})
  return (
<>
        <div className='tag-container'>
          <ul>Top tags:</ul>
    
           <Link to="tags/food"  >
               <li>Food/Dining</li>
            </Link>
            <Link to="tags/experiences"  >
               <li>Experiences</li>
            </Link>
            <Link to="tags/products"  >
               <li>Products</li>
            </Link>
           
        </div>

    <div className='rec-card-container'>
        <p>Today's top reccomendations:</p>
        {posts.map((post) => 
        <RecCard key={post.id} loggedInUser={loggedInUser} onLike= {onLike} post={post}/>)}
  {/* <Routes>
    <Route path="/posts/:tags" element={<TagsContainer tagFeed={tagFeed} loggedInUser={loggedInUser}/>} />
  </Routes> */}

    </div>
</>
  )
}
