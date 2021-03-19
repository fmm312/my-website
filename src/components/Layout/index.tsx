import { useEffect, useState } from 'react';

import { Container } from './styles';

import Header from '../Header';
import Main from '../Main';
import Menu from '../Menu';
import Right from '../Right';
import Footer from '../Footer';
import Splash from '../Splash';

const Layout: React.FC = () => {
  const [renderSplash, setRenderSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRenderSplash(false);
    },3000)
  }, []);

  return (
    renderSplash ? (
      <Splash />
    ) : (
      <Container>
        <Header />
        <Main />
        <Menu />
        <Right />
        <Footer />
      </Container>
    )  
  );
}

export default Layout;