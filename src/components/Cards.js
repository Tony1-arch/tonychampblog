import React from 'react'

import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from '../sanity';
       
  function Cards(post) {
  return (
  
 <div  >
 
  <div className='bg-red-500 '>
    <div key={post.id}>
      <img src={ urlFor(post.mainImage).url() } alt=''/>
    </div>
    <p>{post.title}</p>
   <p>HI</p> 
    <div>
    <BlockContent
    blocks={post.body}
    
  />
 
    </div>
    
    <div>
    
    </div>
   


 <div>
  

    

   </div>
   </div>
    </div>
  )
}

export default Cards


