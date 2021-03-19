import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;