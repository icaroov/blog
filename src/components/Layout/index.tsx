import React from 'react'

import GlobalStyles from '~app/styles/global'
import Profile from '~app/components/Profile'

const Layout: React.FC = props => {
  const { children } = props

  return (
    <>
      <GlobalStyles />
      <aside>
        <Profile />
      </aside>
      <main>{children}</main>
    </>
  )
}

export default Layout
