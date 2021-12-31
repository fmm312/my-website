import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 20px !important;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 200px;

  @media(min-width: 1600px) {
    padding: 80px 300px;
  }

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: -25px;

    > span {
      color: #00adb5;
    }
  }

  > div {
    margin-top: 30px;
  }

  > h1, .title {
    font-family: 'Poppins', sans-serif;
    font-size: 54px;
    line-height: 65px;
    font-weight: 900;
  }

  button {
    border: 2px solid #00adb5;
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary};
    padding: 10px 30px;
    margin-top: 60px;
    border-radius: 4px;
    transition: all 500ms ease;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 3.5px;
    font-weight: 600;
    position: absolute;
  }

  button:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
  }
`;
