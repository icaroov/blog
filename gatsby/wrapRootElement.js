import React from 'react'

import AppProvider from '../src/hooks'

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>
}
