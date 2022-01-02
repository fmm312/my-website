import styled from 'styled-components';

export const Container = styled.div`
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 200px;
  position: fixed;
  left: 20%;
  width: 100%;

  @media(min-width: 1600px) {
    padding: 80px 300px;
  }

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: -25px;

    @media(max-width: 520px) {
      font-size: 16px;
      line-height: 22px;
    }

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

    @media(max-width: 520px) {
      font-size: 20px;
      line-height: 28px;
    }
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

    @media(max-width: 520px) {
      padding: 8px 16px;
      font-size: 10px;
    }
  }

  button:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
  }
`;
