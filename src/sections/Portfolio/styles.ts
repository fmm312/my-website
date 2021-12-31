import styled from 'styled-components';

export const Container = styled.div`
  color: ${(props) => props.theme.colors.text};
`;

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ButtonFilter = styled.button`
  margin: 8px;
  border: 2px solid #00adb5;
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary};
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 4px;
  transition: all 500ms ease;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 3.5px;
  font-weight: 600;
  width: 152px;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
  }
`;

export const Content = styled.div`
  button {
    border: 2px solid #00adb5;
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary};
    padding: 10px 30px;
    margin-top: 10px;
    border-radius: 4px;
    transition: all 500ms ease;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 3.5px;
    font-weight: 600;

    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.text};
    }
  }
  
`;

export const Text = styled.p`
  width: 70%;
`;
