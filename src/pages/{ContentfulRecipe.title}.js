import React from 'react'
import { graphql,Link } from 'gatsby'
import { GatsbyImage,getImage } from 'gatsby-plugin-image'
import {BsClockHistory, BsClock,BsPeople} from "react-icons/bs"
import Layout  from '../components/Layout'
import slugify from 'slugify'
import SEO from '../components/SEO'
const RecipeTemplate = ({data}) => {
const {
    title,
    cookTime,
    content,
    prepTime,
    servings,
    description:{description},
    image
} = data.contentfulRecipe;
const pathToImage = getImage(image)
const {tags,ingredients,instructions,nutrition} = content
  return (
   <Layout>
    <SEO title={title}/>
      <main className="page">
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>serving</h5>
                  <p>{servings} </p>
                </article>
              </div>
              {/* tags */}
              <p className="recipe-tags">
                Tags :
                {tags.map((tag, index) => {
                  const slug = slugify(tag, { lower: true })

                  return (
                    <Link to={`/tags/${slug}`} key={index}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          {/* rest of the content */}
          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((item, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {item}
                    </p>
                  )
                })}
              </div>
              <div>
             
                <div className="nutrition_facts international">
    <div className="heading black">Nutrition Facts</div>
    <div className="divider thick"></div>
   
    
    <div className="nutrient black left">Energy</div>
    <div className="nutrient black right tRight">{nutrition.find(item=>item.split(":")[0]==='Calories').split(":")[1]}kcal</div>
    
    <div className="divider thin"></div>
    
                    {nutrition.filter(item=>item.split(":")[0]!=='Calories').map((item, index) => {
                  return (
        <div key={index}>
        <div  className="divider thin"></div>
        <div className="nutrient left">{item.split(":")[0]}</div>
        <div className="nutrient right tRight">{item.split(":")[1]}</div>
        </div>
                  )
                })}
        <div className="divider thin"></div>
        <div className="nutrient left">Sodium</div>
        <div className="nutrient right tRight">6mg</div>
    
    <div className="divider medium"></div>
</div>
               
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}
export const query = graphql`
query getSingleRecipe($title: String) {
  contentfulRecipe(title: {eq: $title}) {
    title
    cookTime
    content {
      ingredients
      instructions
      tags
      nutrition
    }
    description {
      description
    }
    prepTime
    servings
    image {
      gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
    }
  }
}
`
export default RecipeTemplate