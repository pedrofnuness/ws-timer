import { useContext } from 'react'
import { useFormContext } from 'react-hook-form';
import * as Styled from './styles'
import { CyclesContext } from '../../../../contexts/CyclesContext';

export default function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <Styled.FormContainer>
      <label htmlFor="task">I will work on</label>
      <Styled.TaskInput 
        id="task" 
        list="task-suggestions" 
        placeholder="Name your task" 
        disabled={!!activeCycle}
        {...register('task')}
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
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}

      />

      <span>minutes.</span>
    </Styled.FormContainer>
  )
}