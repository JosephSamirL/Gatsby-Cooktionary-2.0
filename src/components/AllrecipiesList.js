import React from 'react'
import RecipiesList from './RecipiesList'
import TagsList from './TagsList'
import { useStaticQuery, graphql } from 'gatsby'
const query = graphql`
  {
    allContentfulRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        content {
          tags
        }
      }
    }
  }
`
const AllrecipiesList = () => {
const {allContentfulRecipe:{nodes:recipes}} = useStaticQuery(query);
console.log(recipes)
  return (
    <section className='recipes-container'>
    
    <TagsList recipes={recipes}/>
    <RecipiesList recipes={recipes}/>
    </section>
  )
}

export default AllrecipiesList