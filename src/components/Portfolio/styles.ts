import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 100px;
  color: ${props=> props.theme.colors.text};

  > h1 {
    color: ${props=> props.theme.colors.primary};
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 42px;
  }

  .line-bellow-title {
    border-bottom: 4px solid ${props=> props.theme.colors.text};
    margin-top: -20px;
    width: 50px;
    margin-bottom: 40px;
  }
`;