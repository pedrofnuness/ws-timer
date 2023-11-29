import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import * as Styled from './styles';
import { NewCycleFormData } from '../../@types';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Enter the task'),
  minutesAmount: zod.number().min(5).max(60)
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema> 

export function Home() {
  const { register, handleSubmit, watch } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  });

  function handleCreateNewCycle(data: NewCycleFormData) {
    
  }

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <Styled.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <Styled.FormContainer>
          <label htmlFor="task">I will work on</label>
          <Styled.TaskInput 
            id="task" 
            list="task-suggestions" 
            placeholder="Name your task" 
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
            // max={60}
            {...register('minutesAmount', { valueAsNumber: true })}

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

        <Styled.StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24}/>
          Start
        </Styled.StartCountdownButton>
      </form>
    </Styled.HomeContainer>
  )
}
