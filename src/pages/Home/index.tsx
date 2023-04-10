import { HandPalm, Play } from 'phosphor-react'
import { differenceInSeconds } from 'date-fns'
import {
  HomeContainer,
  StartCountdowmButton,
  StopCountdowmButton,
} from './styles'

import * as zod from 'zod'
import { createContext, useState } from 'react'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activedCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
}
const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe o nome da tarefa'),
  minutesAmount: zod.number().min(5).max(60),
})
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export const CyclesContext = createContext({} as CyclesContextType)


export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activedCycleId, setActivedCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActivedCycleId(newCycle.id)
    setAmountSecondsPassed(0)

    reset()
  }

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activedCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activedCycleId)

  function handleInterruptedCycle() {
    setCycles(
      cycles.map((cycle) => {
        if (cycle.id === activedCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActivedCycleId(null)
  }

  const task = watch('task')
  const isSubmitDisable = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <CyclesContext.Provider
          value={{
            activeCycle,
            activedCycleId,
            markCurrentCycleAsFinished,
            setSecondsPassed,
            amountSecondsPassed,
          }}
        >
          <FormProvider {...newCycleForm}>
            <NewCycleForm></NewCycleForm>
          </FormProvider>
          <Countdown></Countdown>
        </CyclesContext.Provider>

        {activeCycle ? (
          <StopCountdowmButton onClick={handleInterruptedCycle} type="button">
            <HandPalm size={24}></HandPalm>
            Interromper
          </StopCountdowmButton>
        ) : (
          <StartCountdowmButton disabled={isSubmitDisable } type="submit">
            <Play size={24}></Play>
            Começar
          </StartCountdowmButton>
        )}
      </form>
    </HomeContainer>
  )
}
