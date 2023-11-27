import React from 'react'
import * as Styled from './styles'

export function History() {
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
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>1 week ago</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>1 week ago</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>1 week ago</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>1 week ago</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </Styled.HistoryList>
    </Styled.HistoryContainer>
  )
}
