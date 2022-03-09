import React from 'react'
import Layout from '../components/Layout'
import { graphql,Link } from 'gatsby'
import utils from "../utils/utils"
import slugify from 'slugify'
const Tags = ({data:{allContentfulRecipe:{nodes:recipes}}}) => {
  const newTags = utils(recipes)
  return (
    <Layout>
      <main className='page'>
        <section className='tags-page'>
          {newTags.map((tag,index)=>{
            const [text,value] = tag;
            const slug = slugify(text,{lower:true})
            return(
            <Link className='tag' to={`/tags/${slug}`} key={index}>
              <h5>{text}</h5>
              <p>{value} recipe</p>
            </Link>)
          })}

        </section>

      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
export default Tags