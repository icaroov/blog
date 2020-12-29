import styled from 'styled-components'
import Img from 'gatsby-image'

export const Container = styled(Img)`
  width: 5.375rem;
  height: 5.375rem;

  border-radius: 50%;
  margin-right: 0.75rem;

  flex-shrink: 0;

  @media (max-width: 800px) {
    width: 80px;
    height: auto;
  }
`
