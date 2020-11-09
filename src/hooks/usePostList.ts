import { useStaticQuery, graphql } from 'gatsby'

export interface PostQueryProps {
  allMarkdownRemark: {
    edges: EdgesProps[]
  }
}

export interface EdgesProps {
  node: {
    fields: {
      slug: string
    }
    frontmatter: {
      background?: string
      category: string
      date: string
      description: string
      title: string
    }
    timeToRead: string
  }
}

export const usePostList = () => {
  const { allMarkdownRemark }: PostQueryProps = useStaticQuery(
    graphql`
      query PostList {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
    `,
  )
  return allMarkdownRemark.edges
}
