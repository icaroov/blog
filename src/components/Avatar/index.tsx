import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { AvatarProps } from './props'

const Avatar: React.FC = () => {
  const { avatarImage }: AvatarProps = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `,
  )

  return (
    <Img
      fixed={avatarImage.childImageSharp.fixed}
      style={{
        borderRadius: '50%',
        height: '3.75rem',
        width: ' 5.75rem',
        marginRight: '1rem',
      }}
    />
  )
}

export default Avatar
