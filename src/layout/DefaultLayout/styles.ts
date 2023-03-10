import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh);
  padding: 2.5rem;
  margin: 5rem auto;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['gray-800']};
`
