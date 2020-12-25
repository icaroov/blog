import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '~app/styles/global'
import { useToggleTheme } from '~app/hooks/toggleTheme'

import HeaderMenu from './HeaderMenu'
import Footer from './Footer'

import Sidebar from '~app/components/Sidebar'
import MenuBar from '~app/components/MenuBar'

import * as Styled from './styles'

const Layout: React.FC = props => {
  const { children } = props

  const { theme } = useToggleTheme()

  return (
    <ThemeProvider theme={theme}>
      <Styled.Container>
        <GlobalStyles />
        {/* <Sidebar /> */}

        <HeaderMenu />
        <Styled.Main>{children}</Styled.Main>
        {/* <MenuBar /> */}
        <Footer />
      </Styled.Container>
    </ThemeProvider>
  )
}

export default Layout
