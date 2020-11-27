import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom'

import PostItem from '../PostItem'
import * as Styled from './styles'
import { AlgoliaProps, HitProps } from './props'

const algolia: AlgoliaProps = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

function Hit({
  hit: { title, description, date, category, timeToRead, background, fields },
}: HitProps) {
  return (
    <PostItem
      slug={fields.slug}
      title={title}
      description={description}
      category={category}
      date={date}
      timeToRead={timeToRead}
      background={background}
    />
  )
}

const Search: React.FC = () => {
  return (
    <Styled.Container>
      <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
        <SearchBox autoFocus translations={{ placeholder: 'Pesquisar...' }} />
        <Stats
          translations={{
            stats(nbHits, timeSpentMs) {
              return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
            },
          }}
        />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </Styled.Container>
  )
}

export default Search
