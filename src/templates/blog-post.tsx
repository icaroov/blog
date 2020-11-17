import React from 'react'
import { graphql } from 'gatsby'
import { PostProps } from '~app/@types/post'

import Layout from '~app/components/Layout'
import SEO from '~app/components/SEO'
import RecommendedPosts from '~app/components/RecommendedPosts'

import * as Styled from '~app/components/Post/styles'

const BlogPost: React.FC<PostProps> = ({ data, pageContext }) => {
  const {
    frontmatter: { title, description, date },
    html,
    timeToRead,
  } = data.markdownRemark

  const { nextPost, previousPost } = pageContext

  return (
    <Layout>
      <SEO title={title} />
      <Styled.Header>
        <Styled.Date>
          {date} • {timeToRead} min de leitura
        </Styled.Date>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
      </Styled.Header>
      <Styled.MainContent>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </Styled.MainContent>
      <RecommendedPosts next={nextPost} previous={previousPost} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
