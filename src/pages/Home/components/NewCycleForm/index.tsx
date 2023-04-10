import { FormContainer, MinuteAmountInput, TaskInput } from './style'
import { useContext } from 'react'
import { CyclesContext } from '../..'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  // eslint-disable-next-line no-unused-vars
  const { activeCycle, amountSecondsPassed, setSecondsPassed } =
    useContext(CyclesContext)

  const { register } = useFormContext()
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        placeholder="Dê um nome para o seu projeto"
        id="task"
        disabled={!!activeCycle}
        list="task-suggestions"
        {...register('task')}
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
        disabled={!!activeCycle}
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
