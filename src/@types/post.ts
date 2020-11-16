export interface PostQueryProps {
  data: {
    allMarkdownRemark: {
      edges: EdgesProps[]
    }
  }
  pageContext: {
    currentPage: number
    numPages: number
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

export interface PostProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        description: string
        date: string
      }
      html: string
      timeToRead: string
    }
  }
}
