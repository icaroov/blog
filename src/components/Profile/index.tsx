import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { fadeInUp } from '~app/utils/pageScroll'

import * as Styled from './styles'
import { ProfileData } from './props'

const avatarImage = require('~app/images/perfil2.jpg')

const Profile: React.FC = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  }: ProfileData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <Styled.Container variants={fadeInUp}>
      <Styled.Avatar
        src={avatarImage}
        alt="Foto de perfil"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />

      <Styled.Description>
        Written by {title} who works building clean user interfaces with React
        and others cool stuff. 👋
      </Styled.Description>
    </Styled.Container>
  )
}

export default Profile
