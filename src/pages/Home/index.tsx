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

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="taskName">Vou trabalhar em</label>
          <TaskInput
            type="text"
            placeholder="Dê um nome para o seu projeto"
            id="taskName"
            list="task-suggestions"
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

        <StartCountdowmButton disabled={false} type="submit">
          <Play size={24}></Play>
          Começar
        </StartCountdowmButton>
      </form>
    </HomeContainer>
  )
}
