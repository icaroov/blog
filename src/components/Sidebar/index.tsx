import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

import { useToggleTheme } from '~app/hooks/toggleTheme'

import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import MenuLinks from '../MenuLinks'

import * as Styled from './styles'

const Sidebar: React.FC = () => {
  const { colors, title } = useContext(ThemeContext)
  const { toggleTheme } = useToggleTheme()

  return (
    <Styled.Container>
      <Profile />
      <SocialLinks />
      <MenuLinks />

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.background)}
        onColor={colors.success}
      />

      <Styled.TextBottom>
        Feito com
        <span>♥</span>
        por Ícaro Oliveira
      </Styled.TextBottom>
    </Styled.Container>
  )
}

export default Sidebar
