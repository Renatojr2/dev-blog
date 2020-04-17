import React from 'react'
import protoTypes from 'prop-types'


import * as S from './styled'

const RecomendedPost = ({next,previous})=>(
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink  
      to={previous.fields.slug} 
      className="previous">
        {previous.frontmatter.title}

      </S.RecommendedLink >
    )}

    {next && (
      <S.RecommendedLink  
      to={next.fields.slug} 
      className="next">
        {next.frontmatter.title}
      </S.RecommendedLink >
    )}
  </S.RecommendedWrapper>
)

RecomendedPost.protoTypes = {
  next: protoTypes.shape({
    frontmatter: protoTypes.shape({
      title: protoTypes.string.isRequired
    }),
    fields: protoTypes.shape({
      slug: protoTypes.string.isRequired
    })
  }),

  previous: protoTypes.shape({
    frontmatter: protoTypes.shape({
      title: protoTypes.string.isRequired
    }),
    fields: protoTypes.shape({
      slug: protoTypes.string.isRequired
    })
  })
}

export default RecomendedPost