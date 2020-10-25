import React from 'react'

import { ThemeContextProvider } from './toggleTheme'

const AppProvider: React.FC = ({ children }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>
}
export default AppProvider
