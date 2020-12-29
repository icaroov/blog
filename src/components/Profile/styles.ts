import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.section)`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 34rem;

  margin: 2rem auto;
  padding: 1rem;

  border-radius: 0.75rem;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.footer};
  box-shadow: 5px 5px 26px 20px rgba(50, 50, 50, 0.1);

  @media (max-width: 600px) {
    max-width: 17rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Avatar = styled(motion.img)`
  width: 5.375rem;
  height: 5.375rem;

  flex-shrink: 0;

  border-radius: 50%;
  margin-right: 0.75rem;

  @media (max-width: 800px) {
    width: 80px;
    height: auto;
  }
`

export const Author = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
`

export const Description = styled.span`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2rem;

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`
