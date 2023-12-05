import React from 'react'
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as Styled from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Enter the task'),
  minutesAmount: zod.number().min(5).max(60)
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;


export default function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  });

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