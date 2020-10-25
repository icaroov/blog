import React, { createContext, useContext } from 'react'
import { DefaultTheme } from 'styled-components'

import usePersistedState from './usePersistedState'

import light from '~app/styles/themes/light'
import dark from '~app/styles/themes/dark'

interface ThemeContextData {
  toggleTheme(): void
  theme: DefaultTheme
}

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData,
)

export const ThemeContextProvider: React.FC = props => {
  const { children } = props
  const [theme, setTheme] = usePersistedState<DefaultTheme>('@theme', dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useToggleTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useToggleTheme must be used within a ThemeContextProvider')
  }

  return context
}
