import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import {Link,graphql} from 'gatsby'
import ReccipiesList from "../components/RecipiesList"
const About = ({data:{allContentfulRecipe:{nodes:recipes}}}) => {
  return (
    <Layout>
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2>I am a WebDeveloper who also likes cooking!!!</h2>
            <p>Join me as i post my favorite resipies that i either enjoy everyday or cook for a special ocasion.</p>
            <p>Enjoy !</p>
            <Link to="/contact" className='btn'> contact</Link>

          </article>
          <StaticImage 
            src="../assets/images/about.jpg"
            alt="Guy pouring flour"
            className='about-img'
            placeholder='blured'
          
          />
        </section>
        <section className='featured-recipes'>
          <h5>Featured Recipies</h5>
          <ReccipiesList recipes={recipes}/>
        </section>

      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulRecipe(filter: {featured: {eq: true}}) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
export default About