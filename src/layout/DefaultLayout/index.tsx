import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

export function DeafultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet></Outlet>
    </LayoutContainer>
  )
}
