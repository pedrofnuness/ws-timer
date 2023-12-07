import React, { useContext } from 'react'
import * as Styled from './styles'
import { CyclesContext } from '../../contexts/CyclesContext';

export function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <Styled.HistoryContainer>
      <h1>My history</h1>

      <Styled.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map(cycle => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutes</td>
                <td>{cycle.startDate.toISOString()}</td>
                <td>
                  {cycle.finishedDate && (
                    <Styled.Status statusColor="green">Completed</Styled.Status>
                  )}

                  {cycle.interruptedDate && (
                    <Styled.Status statusColor="red">Interrupted</Styled.Status>
                  )}

                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <Styled.Status statusColor="yellow">On going</Styled.Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Styled.HistoryList>
    </Styled.HistoryContainer>
  )
}
