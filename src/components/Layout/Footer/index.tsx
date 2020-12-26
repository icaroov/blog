import React from 'react'

import SocialLinks from '~app/components/SocialLinks'
import { getPath } from '~app/utils/getPaths'

import * as Styled from './styles'

const gatsbyUrl = getPath.urls.externalLinks.gatsby

const Footer: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Text>
          <Styled.Tag to="/">Blog</Styled.Tag>
          <p>
            Ícaro Oliveira © 2021, feito com{' '}
            <a href={gatsbyUrl} target="_blank" rel="noreferrer">
              Gatsby
            </a>{' '}
            🔥
          </p>
        </Styled.Text>
        <SocialLinks />
      </Styled.Wrapper>
    </Styled.Container>
  )
}

export default Footer
