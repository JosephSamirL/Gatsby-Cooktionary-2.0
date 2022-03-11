import React from 'react'
import Layout from '../components/Layout'

import AllrecipiesList from '../components/AllrecipiesList'
import SEO from '../components/SEO'
const Recipies = () => {


  return (

    <Layout>
      <SEO title={"Recipes"}/> 
    <main className='page'>  
    
      <AllrecipiesList/>
      </main>
     </Layout>
  )
}

export default Recipies