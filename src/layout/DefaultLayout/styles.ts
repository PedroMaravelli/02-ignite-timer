import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 75rem;
  height: calc(90vh);
  padding: 2.5rem;
  margin: 5rem auto;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['gray-800']};
`
