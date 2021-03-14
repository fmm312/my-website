import styled from "styled-components";

export const Container = styled.div`
  background: orange;
  display: grid;

  grid-template-areas:
  'header header header header header header'
  'menu main main main main right'
  'footer footer footer footer footer footer';

  height: 100vh;
`;