import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 120px;
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

  .content {
    display: flex;
    justify-content: space-between;

    .divider {
      background-color: ${props=> props.theme.colors.text};
      opacity: .6;
      width: 1px;
    }

    > div {
      width: 45%;

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
    } 

    span {
      margin: 0px 12px 0px 10px;
    }

    .row {
      display: flex;
      align-items: center;

      p {
        margin-left: 10px;
      }

      .icon{
        font-size: 28px;
      }
    }
  }
`;