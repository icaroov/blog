import React from 'react'
import PostItem from '../PostItem'
import { HitProps } from './props'

const Hit = ({ hit }: HitProps) => {
  return (
    <PostItem
      slug={hit.fields.slug}
      title={hit.title}
      description={hit.description}
      category={hit.category}
      date={hit.date}
      timeToRead={hit.timeToRead}
      background={hit.background}
    />
  )
}

export default Hit
