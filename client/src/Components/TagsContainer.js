import React from 'react'
import { useState, useEffect, useParams } from "react";
import RecCard from './RecCard';


export default function TagsContainer({loggedInUser, posts, tagFeed}) {

//   let tagFeed = posts.filter((post) => {
//   return post.tags === "food/dining"
// })
    // const params = useParams();
    // console.log(params)

return (
    <div className='rec-card-container'>

       {
        tagFeed.map((post) => 
            <RecCard key={post.id} loggedInUser={loggedInUser} post={post}/>)}

    </div>
  )
}
