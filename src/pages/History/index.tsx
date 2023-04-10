import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Projeto 2 </td>
              <td>10 minutos </td>
              <td>Há cerca de 1 minuto</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Projeto Teste</td>
              <td>5 minutos </td>
              <td>Há cerca de 5 minutos</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Projeto teste 2</td>
              <td>4 minutos </td>
              <td>Há cerca de 10 minutos</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Projeto Ignite</td>
              <td>10 minutos </td>
              <td>Agora mesmo</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            {/* <tr>
              <td>Nome da tarefa</td>
              <td>25 minutos </td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr> */}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
