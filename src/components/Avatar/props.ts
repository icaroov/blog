import { FixedObject } from 'gatsby-image'

export interface AvatarProps {
  avatarImage: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
}
