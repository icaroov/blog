import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { AvatarProps } from './props'

const Avatar: React.FC = () => {
  const { avatarImage }: AvatarProps = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "perfil2.jpg" }) {
          childImageSharp {
            fixed(width: 200, height: 200) {
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
        height: '5.375rem',
        width: ' 5.375rem',
        marginRight: '0.75rem',
        flexShrink: 0,
      }}
    />
  )
}

export default Avatar
