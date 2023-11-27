import React from 'react'
import { Play } from 'phosphor-react'
import * as Styled from './styles';

export function Home() {
  return (
    <Styled.HomeContainer>
      <form action="">
        <Styled.FormContainer>
          <label htmlFor="task">I will work on</label>
          <Styled.TaskInput 
            id="task" 
            list="task-suggestions" 
            placeholder="Name your task" 
          />

          <datalist id="task-suggestions">
            <option value="Write the documentation" />
            <option value="Write unit tests" />
            <option value="Give a break" />
            <option value="Prepare breakfast" />
          </datalist>

          <label htmlFor="minutesAmount">for</label>
          <Styled.MinutesAmountInput 
            type="number" 
            id="minutesAmount" 
            placeholder="00"
            step={5}
            min={5}
            max={5}
          />

          <span>minutes.</span>
        </Styled.FormContainer>

        <Styled.Countdowncontainer>
          <span>0</span>
          <span>0</span>
          <Styled.Separator>:</Styled.Separator>
          <span>0</span>
          <span>0</span>
        </Styled.Countdowncontainer>

        <Styled.StartCountdownButton disabled type="submit">
          <Play size={24}/>
          Start
        </Styled.StartCountdownButton>
      </form>
    </Styled.HomeContainer>
  )
}
