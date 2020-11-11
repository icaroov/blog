import styled from 'styled-components'

export const PaginationContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  border-top: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.primary};

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: ${props => props.theme.colors.hover};
    }
  }
`
