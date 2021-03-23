import React from 'react'

import Layout from '~app/components/Layout'
import SEO from '~app/components/SEO'
import Search from '~app/components/Search'

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const SearchPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Pesquisar" />
      <Search algolia={algolia} />
    </Layout>
  )
}

export default SearchPage
