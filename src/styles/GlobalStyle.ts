import { createGlobalStyle } from 'styled-components';

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

  ::-webkit-scrollbar {
    width: 9px;
    background: rgba(34, 40, 49, .8);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(34, 40, 49, .7);
    border-radius: 8px;
  }
`;
