import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/GlobalStyle';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import { Container } from '../styles/Layout';

import Header from '../components/Header';
import Menu from '../components/Menu';
import Rigth from '../components/Rigth';
import Splash from '../components/Splash';

import Content from '../sections/Content';

import { storeWrapper } from '../store';

function App() {
  const [renderSplash, setRenderSplash] = useState(true);
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRenderSplash(false);
    },3000)
  }, []);

  function toggleTheme() {
    setTheme(!theme);
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme ? dark : light}>
        {renderSplash ? (
          <Splash />
        ) : (
          <Container>
            <Header toggleTheme={toggleTheme} theme={theme} />
            <Content />
            <Menu />
            <Rigth />
          </Container>
        )}
      </ThemeProvider>
    </>
  )
}

export default storeWrapper.withRedux(App);
