import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import SEO from '../components/seo'
import RecomendedPost from '../components/RecomendedPost'
import Comments from '../components/Coments'


import * as S from '../components/Post/styled'

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost




  return (
    <Layout>
      <S.Container>
        <SEO title={data.markdownRemark.frontmatter.title} />
        <S.PostHeader>
          <S.PostDate>{data.markdownRemark.frontmatter.date}
            {data.markdownRemark.timeToRead}  min de leitura
      </S.PostDate>
          <S.PostTitle>{data.markdownRemark.frontmatter.title}</S.PostTitle>
          <S.PostDescription>{data.markdownRemark.frontmatter.description}</S.PostDescription>
        </S.PostHeader>

        <S.MainContent>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
        </S.MainContent>

        <RecomendedPost next={next} previous={previous} />
        <Comments url={post.fields.slug} title={post.frontmatter.title} />
      </S.Container>
    </Layout>

  )
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
}



`




export default BlogPost