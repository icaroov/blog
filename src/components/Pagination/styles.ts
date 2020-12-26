import styled from 'styled-components'

export const PaginationContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  color: ${props => props.theme.colors.primary};

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
