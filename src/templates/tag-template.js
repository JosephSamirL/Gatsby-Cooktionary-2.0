import React from 'react'
import { graphql } from 'gatsby'

import RecipiesList from "../components/RecipiesList"
import Layout from "../components/Layout"
const TagTemplate = ({data, pageContext}) => {
    const {allContentfulRecipe:{nodes:recipes}} = data;
  return (
    <Layout>
        <main className='page'>
        <h2>{pageContext.tag}</h2>
        <div className='tag-recipes'>
            <RecipiesList recipes={recipes}/>
        </div>
        
        </main>
    </Layout>
  )
}
export const query = graphql`query getRecipeByTag($tag: String) {
  allContentfulRecipe(
    sort: {fields: title, order: ASC}
    filter: {content: {tags: {eq: $tag}}}
  ) {
    nodes {
      title
      id
      cookTime
      prepTime
      image {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
    }
  }
}`
export default TagTemplate