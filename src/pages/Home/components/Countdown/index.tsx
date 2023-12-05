import React, { useState, useEffect } from 'react'
import * as Styled from './styles'
import { differenceInSeconds } from 'date-fns';

interface CountdownProps {
  activeCycle: any
  setCycles: any
  activeCycleId: any
}

export default function Countdown({ activeCycle, setCycles }: CountdownProps) {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(), 
          activeCycle.startDate
        );

        if (secondsDifference >= totalSeconds) {
          setCycles(state => state.map(cycle => {
            if (cycle.id === activeCycleId) {
              return { ...cycle, finishedDate: new Date()}
            } else {
              return cycle
            }
          }));

          setAmountSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDifference);
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, activeCycleId, totalSeconds])
  
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
