import React from 'react'
import { Play } from 'phosphor-react'
import * as Styled from './styles';

export function Home() {
  return (
    <Styled.HomeContainer>
      <form action="">
        <Styled.FormContainer>
          <label htmlFor="task">I will work on</label>
          <input id="task" />

          <label htmlFor="minutesAmount">for</label>
          <input type="number" id="minutesAmount" />

          <span>minutes.</span>
        </Styled.FormContainer>

        <Styled.Countdowncontainer>
          <span>0</span>
          <span>0</span>
          <Styled.Separator>:</Styled.Separator>
          <span>0</span>
          <span>0</span>
        </Styled.Countdowncontainer>

        <button type="submit">
          <Play size={24}/>
          Start
        </button>
      </form>
    </Styled.HomeContainer>
  )
}
