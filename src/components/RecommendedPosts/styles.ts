import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.section`
  border-bottom: 1px solid ${props => props.theme.colors.border};
  border-top: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.background};
  display: flex;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.link};
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  &:hover {
    background: ${props => props.theme.colors.border};
  }
  &.previous {
    border-right: 1px solid ${props => props.theme.colors.border};
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: '\\2190';
    margin-right: 0.5rem;
  }
  &.next:after {
    content: '\\2192';
    margin-left: 0.5rem;
  }
`
