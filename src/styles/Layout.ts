import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.colors.background};

  display: grid;
  grid-template-areas:
  'header header header header header header'
  'menu main main main main right'
  'footer footer footer footer footer footer';
`;