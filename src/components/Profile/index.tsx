import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { ProfileData } from './props'
import * as Styled from './styles'
import Avatar from '../Avatar'

const Profile: React.FC = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
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
    <Styled.Container>
      <Styled.ProfileLink>
        <Avatar />
        <Styled.Author>
          {title}
          <Styled.Position>{position}</Styled.Position>
        </Styled.Author>
      </Styled.ProfileLink>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Container>
  )
}

export default Profile
