import React from 'react'
import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'

import * as Styled from './styles'
import hatLogo from '../../assets/hat-logo.svg'

type Props = {}

export function Header({}: Props) {
  return (
    <Styled.HeaderContainer>
      <img src={hatLogo} alt="tourquise cowboy hat logo" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24}/>
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24}/>
        </NavLink>
      </nav>
    </Styled.HeaderContainer>
  )
}