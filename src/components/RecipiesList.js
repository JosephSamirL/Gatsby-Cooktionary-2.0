import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
const RecipiesList = ({recipes=[]}) => {
  return (
    <div className='recipes-list'>
        {recipes.map(item=>{
            const {id,title,image,prepTime,cookTime} = item
            const pathToImg = getImage(image)
            return (<Link className='recipe' key={id} to={`/${title}`}>
                <GatsbyImage image={pathToImg} className="recipe-img" alt={title}/>
                <h5>{title}</h5>
                <p>Prep : {prepTime}min | Cook : {cookTime}min</p>
            </Link>)
        })}

    </div>
  )
}

export default RecipiesList