import { Link } from 'gatsby'
import React from 'react'
import utils from "../utils/utils"
import slugify from 'slugify'
const TagsList = ({recipes=[]}) => {
  const newTags = utils(recipes)
  
  return (
    <div className='tag-container'>
      <h4>Recipes</h4>
      <div className='tags-list'>
        {newTags.map((tag,index)=>{
          const [text,value] = tag
          const slug = slugify(text,{lower:true})
          return( 
          <Link to={`/tags/${slug}`} key={index}>
            {text} ({value})

          </Link>)
        })}

      </div>
      
      </div>
  )
}

export default TagsList