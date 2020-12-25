import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.footer`
  background: ${props => props.theme.colors.footer};
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1020px;

  padding: 2rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const Tag = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  font-weight: 700;

  padding: 0.5rem 1rem;
  margin-right: 15px;

  text-decoration: none;
  color: #fff;
  background: #ed1c24;
`

export const Text = styled.div`
  display: flex;
  align-items: center;

  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};

  > p a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 800px) {
    margin-bottom: 1rem;
  }
`
export const Links = styled.div`
  > a {
    text-decoration: none;
    color: ${props => props.theme.colors.link};

    &:not(:last-child) {
      margin-right: 15px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`
