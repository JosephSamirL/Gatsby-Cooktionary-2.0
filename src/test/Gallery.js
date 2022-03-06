import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useStaticQuery , graphql } from 'gatsby'
const query = graphql`
  {
    allFile {
      totalCount
      nodes {
        name
        childrenImageSharp {
          gatsbyImageData(
            placeholder: TRACED_SVG
            layout: FIXED
            height: 200
            width: 200
          )
        }
      }
    }
  }
`
const Gallery = () => {
    const data = useStaticQuery(query)
    const images = data.allFile.nodes;
    
  return (
<div>
    {images.map( (item,index)=>{
        return (<div key={index}><GatsbyImage image={item.childrenImageSharp[0].gatsbyImageData}/></div>)
    })}
</div>
    
  )
}

export default Gallery