import React from 'react'
import Layout from '../components/Layout'
import "../assets/css/error.scss"
import SEO from "../components/SEO"
const Error = () => {
  return (
    <Layout>
      <SEO title={"Not Found"}/>
      <main className='error-page'>
    <section>
      <h1>404</h1>
      <h3>Page Not Found</h3>
    </section>
      </main>

    </Layout>
  )
}

export default Error