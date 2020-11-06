import styled from 'styled-components'

export const Container = styled.aside`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  width: 20rem;
  border-right: 1px solid ${props => props.theme.colors.border};
  position: fixed;
  padding: 2rem;
  background: ${props => props.theme.colors.background};
`

export const TextBottom = styled.p`
  color: white;
  font-size: 0.8rem;
  margin: 0;

  span {
    display: inline-block;
    padding: 5px;
    position: relative;
    top: 0.2em;
    font-size: 1.4em;
    color: #9580ff;
    transform: scale(0.9);
    -webkit-animation: love 0.5s linear infinite alternate-reverse;
    animation: love 0.5s linear infinite alternate-reverse;
  }
`
