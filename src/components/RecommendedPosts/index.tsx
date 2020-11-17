import React from 'react'

import * as Styled from './styles'
import { Props } from './props'

const RecommendedPosts: React.FC<Props> = ({ next, previous }) => {
  return (
    <Styled.Container>
      {previous && (
        <Styled.RecommendedLink to={previous.fields.slug} className="previous">
          {previous.frontmatter.title}
        </Styled.RecommendedLink>
      )}

      {next && (
        <Styled.RecommendedLink to={next.fields.slug} className="next">
          {next.frontmatter.title}
        </Styled.RecommendedLink>
      )}
    </Styled.Container>
  )
}

export default RecommendedPosts
