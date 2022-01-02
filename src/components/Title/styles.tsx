import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.text};
  width: 200px;
  margin-left: 20px;
  opacity: .2;

  @media(max-width: 520px) {
    display: none;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 28px;

  @media(max-width: 520px) {
    font-size: 18px;
  }
`;

export const NumberTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-family: 'Nunito Sans', sans-serif;
  font-size: 22px;
  margin-right: 15px;
  position: relative;
  top: 2px;

  @media(max-width: 520px) {
    font-size: 16px;
    margin-right: 8px;
  }
`;