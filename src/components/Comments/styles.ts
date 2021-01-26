import styled from 'styled-components'

export const Container = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 3rem 6.4rem 3rem;
  iframe[src*='ads-iframe'] {
    display: none;
  }
  #disqus_thread {
    a {
      color: #1fa1f2 !important;
    }
  }

  > strong {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: 800px) {
    padding: 1rem;
  }
`

export const CommentsTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;
`
