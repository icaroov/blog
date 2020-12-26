import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1020px;
  margin-left: auto;
  margin-right: auto;

  padding: 2rem 3rem 2rem;

  > a {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1;
    text-decoration: none;

    color: ${props => props.theme.colors.primary};

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 800px) {
    padding: 2rem 1rem 2rem;
  }
`
