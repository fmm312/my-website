import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyle';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={dark}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
