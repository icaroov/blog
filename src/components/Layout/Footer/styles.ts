import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.footer`
  -webkit-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.1);
  -moz-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.1);
  box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.1);

  margin-top: 5px;
  background: ${props => props.theme.colors.footer};
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1020px;

  padding: 1rem;
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

  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
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
`
