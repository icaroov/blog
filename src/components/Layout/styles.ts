import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`

export const Main = styled(motion.main)`
  width: 100%;
  max-width: 800px;
  min-height: 100vh;

  margin-left: auto;
  margin-right: auto;

  background: ${props => props.theme.colors.background};
`
