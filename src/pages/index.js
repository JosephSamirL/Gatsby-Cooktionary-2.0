import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import AllrecipiesList from "../components/AllrecipiesList"
import SEO from "../components/SEO"
export default function Home() {
  return( 
    <Layout>
      <SEO title={"Home"}/>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpg"
            alt="korean spicy ramen image"
            className="hero-img"
            layout="fullWidth"
            placeholder="tracedSVG"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Cooks Dictionary</h1>
              <h4>No Fluff, just Recipies</h4>
            </div>
          </div>
        </header>
        <AllrecipiesList/>
      </main>
      
    </Layout>
  )
}
