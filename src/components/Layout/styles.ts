import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`

export const Main = styled.main`
  width: 100%;
  max-width: 1020px;
  min-height: 100vh;

  margin-left: auto;
  margin-right: auto;

  background: ${props => props.theme.colors.background};
`
