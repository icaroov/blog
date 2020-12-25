import React from 'react'

import * as Styled from './styles'
import { getPath } from '~app/utils/getPaths'

const githubUrl = getPath.urls.externalLinks.github
const linkedinUrl = getPath.urls.externalLinks.linkedin
const emailUrl = getPath.urls.externalLinks.email
const gatsbyUrl = getPath.urls.externalLinks.gatsby

const Footer: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Text>
          <Styled.Tag to="/">Blog</Styled.Tag>
          <p>
            Ícaro Oliveira © 2021, feito em{' '}
            <a href={gatsbyUrl} target="_blank" rel="noreferrer">
              Gatsby
            </a>{' '}
            🔥
          </p>
        </Styled.Text>
        <Styled.Links>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            Github
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={emailUrl} target="_blank" rel="noreferrer">
            Email
          </a>
        </Styled.Links>
      </Styled.Wrapper>
    </Styled.Container>
  )
}

export default Footer
