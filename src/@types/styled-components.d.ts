import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secondary: string
      background: string
      text: string
      hover: string
      error: string
      success: string
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
