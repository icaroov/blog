import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.nav`
  margin: 2rem auto;
`

export const List = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const Item = styled.li`
  padding: 0.5rem 0;

  .active {
    color: ${props => props.theme.colors.hover};
  }
`

export const MenuLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: ${props => props.theme.colors.hover};
  }
`
