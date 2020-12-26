import React from 'react'

import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import MenuLinks from '../MenuLinks'

import * as Styled from './styles'

const Sidebar: React.FC = () => {
  return (
    <Styled.Container>
      <Profile />
      <SocialLinks />
      <MenuLinks />

      <Styled.TextBottom>
        Feito com
        <span>♥</span>
        por Ícaro Oliveira
      </Styled.TextBottom>
    </Styled.Container>
  )
}

export default Sidebar
