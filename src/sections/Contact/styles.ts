import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 120px;
  color: ${props=> props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;    
`;

export const Content = styled.div`
  width: 50%;
  text-align: center;
  font-family: 'Nunito Sans', sans-serif;
  margin-top: -15px;

  button {
    border: 2px solid #00adb5;
    background-color: transparent;
    color: ${props=> props.theme.colors.primary};
    padding: 12px 25px;
    font-size: 14px;
    margin-top: 20px;
    border-radius: 4px;
    transition: all 500ms ease;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 3.5px;
    font-weight: 600;

    &:hover {
      background-color: ${props=> props.theme.colors.primary};
      color: ${props=> props.theme.colors.text};
    }
  }
`;

export const SecondaryTitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 25px;
`;