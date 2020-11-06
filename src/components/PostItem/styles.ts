import styled from 'styled-components'
import { Link } from 'gatsby'

interface TagProps {
  backgroundColor: string
}

export const PostLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  display: flex;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: ${props => props.theme.colors.hover};
  }
`

export const Container = styled.section`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  padding: 2rem 3rem;
  width: 100%;
`

export const Tag = styled.div<TagProps>`
  align-items: center;
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : props.theme.colors.hover};
  border-radius: 50%;
  color: ${props => props.theme.colors.background};
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`

export const Date = styled.time`
  font-size: 0.9rem;
`

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
