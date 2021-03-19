import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 120px;
  color: ${props=> props.theme.colors.text};

  > h1 {
    color: ${props=> props.theme.colors.primary};
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 42px;
  }

  h4 {
    color: ${props=> props.theme.colors.text};
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 16px;
  }

  > div {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;

    > p {
      width: 48%;
      font-family: 'Nunito Sans', sans-serif;
      font-size: 18px;
      opacity: .8;
    }

    > div {
      padding-right: 40px;
      position: relative;
      bottom: 0px;
    }
  }

  .line-bellow-title {
    border-bottom: 4px solid ${props=> props.theme.colors.text};
    margin-top: -20px;
    width: 50px;
    margin-bottom: 40px;
  }

  .skill-icon {
    font-size: 32px;
    margin-right: 20px;
    margin-bottom: 20px;
    opacity: .8;
    transition: all 300ms ease;

    &:hover {
      opacity: initial;
      filter: brightness(1.75);
    }
  }

  .skill-icon-arrow {
    color: ${props=> props.theme.colors.primary};
    margin-right: 15px;
    position: relative;
    top: 3px;
  }

  .form-control {
    display: flex;
    align-items: center;
    margin-top: 15px;
    margin-right: 25px;
    cursor: pointer;
    transition: all 300ms ease;

    &:hover {
        filter: brightness(1.5);
      }

    .radio-button {
      width: 13px;
      height: 13px;
      background-color: transparent;
      border-radius: 50%;
      border: 2px solid ${props=> props.theme.colors.primary};
      cursor: pointer;
      margin-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      .radio-button-bullet {
        width: 7px;
        height: 7px;
        background-color: ${props=> props.theme.colors.primary};
        border-radius: 50%;
        cursor: pointer;
      }
    }

    span {
      font-family: 'Nunito Sans', sans-serif;
      font-weight: 400;
      letter-spacing: 1px;
      font-size: 14px;
    }
  }
`;