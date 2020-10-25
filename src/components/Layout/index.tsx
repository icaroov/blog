import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '~app/styles/global'

import Sidebar from '~app/components/Sidebar'
import light from '~app/styles/themes/light'
import * as Styled from './styles'

const Layout: React.FC = props => {
  const { children } = props

  return (
    <ThemeProvider theme={light}>
      <Styled.Container>
        <GlobalStyles />
        <Sidebar />

        <Styled.Main>{children}</Styled.Main>
      </Styled.Container>
    </ThemeProvider>
  )
}

export default Layout
