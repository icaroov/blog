import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '~app/styles/global'

import { useToggleTheme } from '~app/hooks/toggleTheme'
import Sidebar from '~app/components/Sidebar'
import * as Styled from './styles'

const Layout: React.FC = props => {
  const { children } = props

  const { theme } = useToggleTheme()

  return (
    <ThemeProvider theme={theme}>
      <Styled.Container>
        <GlobalStyles />
        <Sidebar />

        <Styled.Main>{children}</Styled.Main>
      </Styled.Container>
    </ThemeProvider>
  )
}

export default Layout
