import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import * as Styled from './styles'

const Avatar: React.FC = () => {
  return (
    <Styled.Container>
      <StaticImage
        src="../../images/perfil2.jpg"
        alt="avatar"
        placeholder="blurred"
      />
    </Styled.Container>
  )
}

export default Avatar
