import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
  height: 30px;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;