import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '~app/styles/global'
import { useToggleTheme } from '~app/hooks/toggleTheme'

import { stagger } from '~app/utils/pageScroll'

import HeaderMenu from './HeaderMenu'
import Footer from './Footer'

import * as Styled from './styles'

const Layout: React.FC = props => {
  const { children } = props

  const { theme } = useToggleTheme()

  return (
    <ThemeProvider theme={theme}>
      <Styled.Container>
        <GlobalStyles />

        <HeaderMenu />

        <Styled.Main
          exit={{ opacity: 0 }}
          initial="in"
          animate="animate"
          variants={stagger}
        >
          {children}
        </Styled.Main>

        <Footer />
      </Styled.Container>
    </ThemeProvider>
  )
}

export default Layout
