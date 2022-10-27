import React from 'react'
import RecCard from './RecCard'
import {Link } from "react-router-dom"
import TagsContainer from './TagsContainer'

export default function Homepage({posts, onLike, loggedInUser, postTags, getLikes}) {

  let tagFeed = posts.filter((post) => {
  return post.tags === "food/dining";

})
  return (
<>
        {/* <div className='tag-container'>
          <span>Top tags:</span>
    
           <Link to="tags/food"  >
               <span>#Food/Dining</span>
            </Link>
            <Link to="tags/experiences"  >
               <span>#Experiences</span>
            </Link>
            <Link to="tags/products"  >
               <span>#Products</span>
            </Link>
           
        </div> */}

    <div className='rec-card-container'>
        {/* <p>Today's top reccomendations:</p> */}
        {posts.map((post) => 
        <RecCard key={post.id} getLikes ={getLikes} loggedInUser={loggedInUser} onLike= {onLike} post={post}/>)}
  {/* <Routes>
    <Route path="/posts/:tags" element={<TagsContainer tagFeed={tagFeed} loggedInUser={loggedInUser}/>} />
  </Routes> */}

    </div>
</>
  )
}
