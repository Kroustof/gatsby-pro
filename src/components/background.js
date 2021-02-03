import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'



const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "bg-site.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Img
      style={{ minHeight: '100vh' }}
      fluid={data.placeholderImage.childImageSharp.fluid} />
  )
}

const Background = () => {
  return (
    <div 
      style={{
        left: '0',
        top: '0',
        overflow: 'hidden',
        margin: '0',
        padding: '0',
        height: '100%',
        width: '100%',
        zIndex: '-999999',
        position: 'fixed'
      }}
    >
      <Image/>
    </div>
  )
}


export default Background
