import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinuteAmountInput,
  Separator,
  StartCountdowmButton,
  TaskInput,
} from './styles'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

export function Home() {

  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe o nome da tarefa'),
    MinuteAmountInput: zod.number().min(5).max(60),
  })

  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema)
  })


  function handleCreateNewCycle(data: any) {
    console.log(data)
  }
  const task: boolean = watch('task')

  const isSubmitDisable = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            placeholder="Dê um nome para o seu projeto"
            id="task"
            list="task-suggestions"
            {...register('task', { valueAsNumber: true })}
          />
          <datalist id="task-suggestions">
            <option value="Projeto Ignite"></option>
            <option value="Projeto DH"></option>
            <option value="Projeto Inglês"></option>
            <option value="Projeto Matemática"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinuteAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdowmButton disabled={isSubmitDisable} type="submit">
          <Play size={24}></Play>
          Começar
        </StartCountdowmButton>
      </form>
    </HomeContainer>
  )
}
