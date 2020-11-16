import React from 'react'
import { graphql } from 'gatsby'
import { PostQueryProps } from '~app/@types/post'

import Layout from '~app/components/Layout'
import SEO from '~app/components/SEO'

import PostItem from '~app/components/PostItem'
import Pagination from '~app/components/Pagination'

const BlogList: React.FC<PostQueryProps> = props => {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  const result = props.data.allMarkdownRemark.edges
  const postList = result.map(
    ({
      node: {
        frontmatter: { background, category, date, description, title },
        timeToRead,
        fields: { slug },
      },
    }) => (
      <PostItem
        key={title}
        slug={slug}
        background={background}
        category={category}
        date={date}
        timeToRead={timeToRead}
        title={title}
        description={description}
      />
    ),
  )

  return (
    <Layout>
      <SEO title="Home" />
      {postList}

      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList
