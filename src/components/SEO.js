import React from 'react'
import {Helmet} from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
const query = graphql`
  {
    site(siteMetadata: {}) {
      siteMetadata {
        title
        desccription
      }
    }
  }`
const SEO = ({title,description}) => {
    const data = useStaticQuery(query)
    const cont = description || data.site.siteMetadata.desccription
  return (
    <Helmet 
    htmlAttributes={{lang: "en"}}
    title={`${title} | ${data.site.siteMetadata.title}`} 
    meta={[{name: `description`, content: cont}]}>
      
    </Helmet>
  )
}

export default SEO
