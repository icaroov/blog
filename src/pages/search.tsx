import React from 'react'

import Layout from '~app/components/Layout'
import SEO from '~app/components/SEO'
import Search from '~app/components/Search'

const SearchPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Pesquisar" />
      <Search />
    </Layout>
  )
}

export default SearchPage
