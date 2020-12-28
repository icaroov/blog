import styled from 'styled-components'

export const Container = styled.nav`
  width: 15%;

  @media (max-width: 800px) {
    margin-top: 2rem;
    width: 90%;
  }

  svg {
    transition: opacity 0.2s;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
`

export const Item = styled.li``

export const Link = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
