import React from 'react'
import * as Styled from './styles'

export default function Countdown() {
  return (
    <Styled.Countdowncontainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Styled.Separator>:</Styled.Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </Styled.Countdowncontainer>
  )
}
