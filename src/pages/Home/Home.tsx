import { useEffect, useState } from 'react';
import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { differenceInSeconds } from 'date-fns';
import * as Styled from './styles';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Enter the task'),
  minutesAmount: zod.number().min(5).max(60)
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  });

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId);

  useEffect(() => {
    if (activeCycle) {
      setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate)
        )
      }, 1000)
    }
  }, [activeCycle])

  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    };

    setCycles(state => [...state, newCycle]);
    setActiveCycleId(newCycle.id);
    reset();
  }

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

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
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Styled.Separator>:</Styled.Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </Styled.Countdowncontainer>

        <Styled.StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24}/>
          Start
        </Styled.StartCountdownButton>
      </form>
    </Styled.HomeContainer>
  )
}
