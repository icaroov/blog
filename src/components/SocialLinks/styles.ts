import styled from 'styled-components'

export const Container = styled.nav`
  width: 15%;
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
  transition: color 0.2s;

  &:hover {
    color: ${props => props.theme.colors.hover};
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
