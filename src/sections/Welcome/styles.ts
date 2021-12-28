import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 150px;
  color: ${props=> props.theme.colors.text};
  margin-bottom: 200px;

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
    font-size: 74px;
    line-height: 85px;
    font-weight: 900;
  }

  > p {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 18px;
    opacity: .8;
    width: 520px;
  }

  button {
    border: 2px solid #00adb5;
    background-color: transparent;
    color: ${props=> props.theme.colors.primary};
    padding: 12px 40px;
    font-size: 16px;
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
    background-color: ${props=> props.theme.colors.primary};
    color: ${props=> props.theme.colors.text};
  }
`;