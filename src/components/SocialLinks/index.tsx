import React from 'react'

import * as Styled from './styles'
import Icons from './icons'
import links from './content'

const SocialLinks: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.List>
        {links.map((link, index) => {
          const Icon = Icons[link.label]

          return (
            <Styled.Item key={index}>
              <Styled.Link
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noopener norefer"
              >
                <Styled.IconWrapper>
                  <Icon />
                </Styled.IconWrapper>
              </Styled.Link>
            </Styled.Item>
          )
        })}
      </Styled.List>
    </Styled.Container>
  )
}

export default SocialLinks
