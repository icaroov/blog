import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.section`
  display: flex;

  border-top: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.background};
`

export const RecommendedLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 3rem;

  width: 50%;
  margin-bottom: 5px;
  text-decoration: none;

  opacity: 0.5;
  color: ${props => props.theme.colors.link};
  background: ${props => props.theme.colors.background};

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
  &.previous {
    border-right: 1px solid ${props => props.theme.colors.border};
    /* border-bottom: 1px solid ${props => props.theme.colors.border}; */
  }
  &.next {
    justify-content: flex-end;
    /* border-bottom: 1px solid ${props => props.theme.colors.border}; */
  }
  &.previous:before {
    content: '\\2190';
    margin-right: 0.5rem;
  }
  &.next:after {
    content: '\\2192';
    margin-left: 0.5rem;
  }

  @media (max-width: 800px) {
    padding: 1rem;
  }
`
