import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'

import * as Styled from './styles'

interface Props {
  url: string
  title: string
}

const Comments: React.FC<Props> = ({ url, title }) => {
  const completeURL = `https://willianjusten.com.br${url}`

  return (
    <Styled.Container>
      <Styled.CommentsTitle>Comentários</Styled.CommentsTitle>
      <ReactDisqusComments
        shortname="icaroov"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </Styled.Container>
  )
}
export default Comments
