import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
  height: 100vh;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.text};
  font-family: 'Nunito Sans', sans-serif;
  padding: 40px 220px;

  @media(min-width: 1600px) {
    padding: 80px 340px;
  }
`;
