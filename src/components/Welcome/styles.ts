import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 100px;
  color: ${props=> props.theme.colors.text};

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

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 74px;
    line-height: 85px;
    font-weight: 900;
  }

  > p {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 18px;
    opacity: .8;
  }
`;