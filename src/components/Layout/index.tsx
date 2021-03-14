import React from 'react';

import { Container } from './styles';

import Header from '../Header';
import Main from '../Main';
import Menu from '../Menu';
import Right from '../Right';
import Footer from '../Footer';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Menu />
      <Right />
      <Footer />
    </Container>
  );
}

export default Layout;