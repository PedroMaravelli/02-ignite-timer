import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const Separator = styled.div`
  color: ${(props) => props.theme['green-500']};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const BaseCountdowmButton = styled.button`
  width: 100%;
  height: 4rem;
  border-radius: 8px;
  cursor: pointer;
  padding: 1rem;

  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  opacity: 1;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
export const StartCountdowmButton = styled(BaseCountdowmButton)`
  background: ${(props) => props.theme['green-500']};
  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`
export const StopCountdowmButton = styled(BaseCountdowmButton)`
  background: ${(props) => props.theme['red-500']};
  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
