/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'

import { HomeAlt as Home } from '@styled-icons/boxicons-regular/HomeAlt'
import { SearchAlt as Search } from '@styled-icons/boxicons-regular/SearchAlt'
import { GridAlt as Grid } from '@styled-icons/boxicons-regular/GridAlt'
import { ArrowToTop as Arrow } from '@styled-icons/boxicons-regular/ArrowToTop'

import * as Styled from './styles'

const MenuBar: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Group>
        <Styled.MenuLink to="/" title="Voltar para Home">
          <Styled.Item>
            <Home />
          </Styled.Item>
        </Styled.MenuLink>

        <Styled.MenuLink to="/search/" title="Pesquisar">
          <Styled.Item>
            <Search />
          </Styled.Item>
        </Styled.MenuLink>
      </Styled.Group>

      <Styled.Group>
        <Styled.Item title="Mudar visualização">
          <Grid />
        </Styled.Item>

        <Styled.Item title="Ir para o topo">
          <Arrow />
        </Styled.Item>
      </Styled.Group>
    </Styled.Container>
  )
}

export default MenuBar
