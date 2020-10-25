import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 3.75rem;
  height: 100vh;
  right: 0;
  border-left: 1px solid #38444d;
  padding: 0.8rem 0;
  position: fixed;
  background: ${props => props.theme.colors.background};
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuLink = styled(Link)`
  display: block;
`

export const Item = styled.span`
  display: block;
  height: 3.75rem;
  width: 3.75rem;
  padding: 1.1rem;
  position: relative;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
`
