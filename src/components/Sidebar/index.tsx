import React from 'react'
import Profile from '../Profile'
import SocialLinks from '../SocialLinks'

import * as Styled from './styles'

const Sidebar: React.FC = () => {
  return (
    <Styled.Container>
      <Profile />
      <SocialLinks />
    </Styled.Container>
  )
}

export default Sidebar
