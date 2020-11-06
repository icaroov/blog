import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secondary: string
      background: string
      hover: string
      error: string
      success: string
      border: string
    }
    breakpoints: {
      xs: string
      sm: string
      mobile: string
      md: string
      desktop: string
      xl: string
    }
  }
}
