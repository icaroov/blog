export interface AlgoliaProps {
  appId: string
  searchOnlyApiKey: string
  indexName: string
}

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
