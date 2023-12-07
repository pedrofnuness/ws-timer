import React, { useContext } from 'react';
import * as zod from 'zod';
import { HandPalm, Play } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';

import * as Styled from './styles';
import NewCycleForm from './components/NewCycleForm';
import Countdown from './components/Countdown';
import { CyclesContext } from '../../contexts/CyclesContext';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Enter the task'),
  minutesAmount: zod.number().min(5).max(60)
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { 
    activeCycle, 
    createNewCycle, 
    interruptCurrentCycle 
  } = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <Styled.HomeContainer>
      <form onSubmit={handleSubmit(createNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
      
        { activeCycle ? (
          <Styled.StopCountdownButton type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24}/>
            Stop
          </Styled.StopCountdownButton>
        ): (
          <Styled.StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24}/>
            Start
          </Styled.StartCountdownButton>
        )}
      </form>
    </Styled.HomeContainer>
  )
}
