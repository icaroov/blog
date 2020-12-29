import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

import * as Styled from './styles'

interface Props {
  url: string
  title: string
}

const Comments: React.FC<Props> = ({ url, title }) => {
  const completeURL = `https://icaroov.netlify.app/${url}`

  return (
    <Styled.Container>
      <Styled.CommentsTitle>Comentários</Styled.CommentsTitle>
      <DiscussionEmbed
        shortname="icaroov"
        config={{
          url: completeURL,
          identifier: completeURL,
          title,
          language: 'pt_BR',
        }}
      />
    </Styled.Container>
  )
}
export default Comments
