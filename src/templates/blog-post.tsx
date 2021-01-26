import React from 'react'
import { graphql } from 'gatsby'
import { motion } from 'framer-motion'

import { fadeInUp } from '~app/utils/pageScroll'
import { PostProps } from '~app/@types/post'

import Layout from '~app/components/Layout'
import SEO from '~app/components/SEO'

import RecommendedPosts from '~app/components/RecommendedPosts'
import Comments from '~app/components/Comments'

import * as Styled from '~app/components/Post/styles'

const BlogPost: React.FC<PostProps> = ({ data, pageContext }) => {
  const {
    frontmatter: { title, description, date, thumbnail },
    html,
    fields: { slug },
    timeToRead,
  } = data.markdownRemark

  const { nextPost, previousPost } = pageContext

  return (
    <Layout>
      <SEO title={title} description={description} image={thumbnail} />

      <Styled.Header variants={fadeInUp}>
        <Styled.Date variants={fadeInUp}>
          {date} • {timeToRead} min de leitura
        </Styled.Date>
        <Styled.Title variants={fadeInUp}>{title}</Styled.Title>

        <Styled.Description variants={fadeInUp}>
          {description}
        </Styled.Description>
      </Styled.Header>

      <Styled.MainContent variants={fadeInUp}>
        <motion.div
          variants={fadeInUp}
          dangerouslySetInnerHTML={{ __html: html }}
        ></motion.div>
      </Styled.MainContent>

      <RecommendedPosts next={nextPost} previous={previousPost} />
      <Comments title={title} url={slug} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        thumbnail
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
