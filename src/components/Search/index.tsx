import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom'

import PostItem from '../PostItem'
import * as Styled from './styles'
import { SearchProps, HitProps } from './props'

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

const Search: React.FC<SearchProps> = ({ algolia }) => {
  const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

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
