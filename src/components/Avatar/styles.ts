import styled from 'styled-components'
import Img from 'gatsby-image'

export const Container = styled(Img)`
  border-radius: 50%;
  height: 3.75rem;
  width: 5.75rem;
  margin-right: 1rem;

  @media (max-width: 800px) {
    width: 9.75rem;
    height: 2.75rem;
  }
`
