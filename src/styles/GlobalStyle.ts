import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  h1, h2 {
    font-family: 'Poppins', sans-serif;
  }

  p {
    font-family: 'Nunito Sans', sans-serif;
    opacity: .8;
  }
`