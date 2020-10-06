import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'

interface AvatarProps {
  avatarImage: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
}

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

  return <Img fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar
