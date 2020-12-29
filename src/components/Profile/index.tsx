import React from 'react'
import { motion } from 'framer-motion'
import { useStaticQuery, graphql } from 'gatsby'

import { fadeInUp } from '~app/utils/pageScroll'

import Avatar from '~app/components/Avatar'

import * as Styled from './styles'
import { ProfileData } from './props'

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
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Avatar />
      </motion.div>

      <Styled.Description>
        Written by {title} who works building clean user interfaces with React
        and others cool stuff. 👋
      </Styled.Description>
    </Styled.Container>
  )
}

export default Profile
