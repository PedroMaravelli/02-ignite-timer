import { HandPalm, Play } from 'phosphor-react'
import {
  HomeContainer,
  StartCountdowmButton,
  StopCountdowmButton,
} from './styles'

import * as zod from 'zod'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContexts'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe o nome da tarefa'),
  minutesAmount: zod.number().min(5).max(60),
})
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisable = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm></NewCycleForm>
        </FormProvider>
        <Countdown></Countdown>

        {activeCycle ? (
          <StopCountdowmButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24}></HandPalm>
            Interromper
          </StopCountdowmButton>
        ) : (
          <StartCountdowmButton disabled={isSubmitDisable} type="submit">
            <Play size={24}></Play>
            Começar
          </StartCountdowmButton>
        )}
      </form>
    </HomeContainer>
  )
}
