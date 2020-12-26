import { ContentType } from '~app/components/RecommendedPosts/props'

// Post Query
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
    frontmatter: Frontmatter
    timeToRead: string
  }
}

type Frontmatter = {
  title: string
  description: string
  date: string
  category?: string
  background?: string
}

// Post
export interface PostProps {
  data: {
    markdownRemark: MarkdownRemark
  }
  pageContext: {
    nextPost: ContentType
    previousPost: ContentType
  }
}

type MarkdownRemark = {
  frontmatter: Frontmatter
  fields: {
    slug: string
  }
  html: string
  timeToRead: string
}

// Algolia
export interface AlgoliaQueryProps {
  query: string
  transformer: ({ data }: { data: DataProps }) => any
  indexName: string
  settings: {
    attributesToSnippet: string[]
  }
}

type DataProps = {
  posts: {
    edges: { node: any }[]
  }
}

export interface ArrayProps {
  node: {
    objectID: string
    fields: {
      slug: string
    }
    frontmatter: {
      category: string
      // eslint-disable-next-line camelcase
      date_timestamp: string
      date: string
      description: string
      title: string
    }
  }
}
