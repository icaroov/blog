import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'

interface ProfileData {
  site: {
    siteMetadata: {
      title: string
      position: string
      description: string
    }
  }
}

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
    <>
      <Avatar />
      <h1>{title}</h1>
      <p>{position}</p>
      <p>{description}</p>
    </>
  )
}

export default Profile
