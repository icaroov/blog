import React from 'react'

import links from './content'
import * as Styled from './styles'

const MenuLinks: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.List>
        {links.map((link, index) => (
          <Styled.Item key={index}>
            <Styled.MenuLink to={link.url} activeClassName="active">
              {link.label}
            </Styled.MenuLink>
          </Styled.Item>
        ))}
      </Styled.List>
    </Styled.Container>
  )
}

export default MenuLinks
