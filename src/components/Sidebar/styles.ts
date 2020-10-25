import styled from 'styled-components'

export const Container = styled.aside`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  width: 20rem;
  border-right: 1px solid #38444d;
  position: fixed;
  padding: 2rem;
  background: ${props => props.theme.colors.background};
`
