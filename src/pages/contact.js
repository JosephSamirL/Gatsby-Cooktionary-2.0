import React from 'react'
import Layout from '../components/Layout'
import {  graphql } from 'gatsby'
import ReccipiesList from "../components/RecipiesList"
const Contact = ({data:{allContentfulRecipe:{nodes:recipes}}}) => {
  return (
    <Layout>
      <main className='page'>

        <section className='contact-page'>
          <article className='contact-info'>
        <h3>Want to get in touch ?</h3>
        <p>
          Get our exclusive recipes ones that you cant find anyone else by contacting use or creating an account
        </p>
        <p>
          sign up and post your own creations and show them to the world
        </p>
        <p>
          what are you waiting for it is free !!!!!!
        </p>
        </article>
        <article className='form contact-form'>
        <div className='form-row'>
          <label htmlFor='name'>your name</label>
          <input type="text" name="name" id="name"/>
        </div>
        <div className='form-row'>
          <label htmlFor='email'>your email</label>
          <input type="text" name="email" id="email"/>
        </div>
      <div className='form-row'>
          <label htmlFor='message'>your message</label>
          <input type="text" name="message" id="message"/>
        </div>
        <button type='submit' className='btn block'> submit</button>
        </article>
        </section>
        <section className='featured-recipes'>
          <h5>Featured Recipes</h5>
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
export default Contact