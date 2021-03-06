import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import * as Img from './styles'



 const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "my-image.png"}){
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
    return( 
     <Img.Avatar fluid={avatarImage.childImageSharp.fluid} />
    )
 }


export default Avatar;
