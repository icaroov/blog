import React from 'react'

import * as Styled from './styles'
import { PostProps } from './props'

const PostItem: React.FC<PostProps> = props => {
  const {
    slug,
    background,
    category,
    date,
    timeToRead,
    title,
    description,
  } = props

  return (
    <Styled.PostLink to={slug}>
      <Styled.Container>
        <Styled.Tag backgroundColor={background}>{category}</Styled.Tag>
        <Styled.Info>
          <Styled.Date>
            {date} - {timeToRead} min de leitura
          </Styled.Date>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Description>{description}</Styled.Description>
        </Styled.Info>
      </Styled.Container>
    </Styled.PostLink>
  )
}

export default PostItem