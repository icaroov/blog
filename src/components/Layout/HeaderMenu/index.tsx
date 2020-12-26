import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { Link } from 'gatsby'

import { useToggleTheme } from '~app/hooks/toggleTheme'

import * as Styled from './styles'

const HeaderMenu: React.FC = () => {
  const { title } = useContext(ThemeContext)
  const { toggleTheme } = useToggleTheme()

  return (
    <Styled.Container>
      <Link to="/">Blog.</Link>

      <DarkModeSwitch
        checked={title === 'dark'}
        onChange={toggleTheme}
        sunColor="#FBC531"
        moonColor="#E3E3C7"
      />
    </Styled.Container>
  )
}

export default HeaderMenu
