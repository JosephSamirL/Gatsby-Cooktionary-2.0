import React from 'react'
import Layout from '../components/Layout'

import AllrecipiesList from '../components/AllrecipiesList'

const Recipies = () => {


  return (

    <Layout> 
    <main className='page'>  
    
      <AllrecipiesList/>
      </main>
     </Layout>
  )
}

export default Recipies