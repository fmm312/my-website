import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector, RootStateOrAny } from 'react-redux';

import { GlobalStyle } from '../styles/GlobalStyle';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import Header from '../components/Header';
import Menu from '../components/Menu';
import Rigth from '../components/Rigth';
import Splash from '../components/Splash';

import Content from '../components/Content';

import { storeWrapper } from '../store';

function App() {
  const [renderSplash, setRenderSplash] = useState(true);
  const [theme, setTheme] = useState(true);

  const selected = useSelector((state: RootStateOrAny) => state.menu.selected);

  function renderSplashScreen() {
    setRenderSplash(true);

    setTimeout(() => {
      setRenderSplash(false);
    }, 1820);
  }

  useEffect(() => {
    renderSplashScreen();
  }, [selected]);

  function toggleTheme() {
    setTheme(!theme);
  }

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme ? dark : light}>
        {renderSplash ? (
          <>
            <Splash />
            <Menu />
            <Rigth />
          </>
        ) : (
          <>
            <Header toggleTheme={toggleTheme} theme={theme} />
            <Content />
            <Menu />
            <Rigth />
          </>
        )}
      </ThemeProvider>
    </>
  );
}

export default storeWrapper.withRedux(App);
