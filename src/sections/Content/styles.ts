import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  font-family: 'Nunito Sans', sans-serif;
  padding: 40px 220px;
  background-color: ${(props) => props.theme.colors.background};
  box-sizing: border-box;

  @media(max-width: 520px) {
    padding: 25px;
    width: 100%;
    height: auto;
    min-height: 100vh;
  }

  @media(min-width: 1600px) {
    padding: 80px 340px;
  }
`;
