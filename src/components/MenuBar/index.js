import React from 'react'

import * as S from './styled'

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"



const MenuBar = ()=>{


  return(
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar para home">
        <S.MenuBarItem><Home /></S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search" title="Pesquisar">
        <S.MenuBarItem><Search /></S.MenuBarItem>
      </S.MenuBarLink>

    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem tirle="Ir para o topo"><Arrow /></S.MenuBarItem>

    </S.MenuBarGroup>
  </S.MenuBarWrapper>
  )

}

export default MenuBar