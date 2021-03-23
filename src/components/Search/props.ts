export interface HitProps {
  hit: {
    fields: {
      slug: string
    }
    title: string
    date: string
    description: string
    category: string
    background: string
    timeToRead: string
  }
}

export interface SearchProps {
  algolia: {
    appId: string
    searchOnlyApiKey: string
    indexName: string
  }
}
