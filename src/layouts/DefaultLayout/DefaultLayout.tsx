import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import * as Styled from './styles';

export function DefaultLayout() {
  return (
    <Styled.LayoutContainer>
      <Header />
      <Outlet />
    </Styled.LayoutContainer>
  )
}
