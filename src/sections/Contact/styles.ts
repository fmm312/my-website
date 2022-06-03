import styled from 'styled-components';

export const Container = styled.div`
`;

export const Content = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  margin-top: -15px;
  width: 50%;

  @media(max-width: 768px) {
    display: none;
  }

  > div {
    margin-right: 80px;

    @media(max-width: 768px) {
      margin-right: 0px;
    }
  }

  button {
    border: 2px solid #00adb5;
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary};
    padding: 12px 25px;
    font-size: 14px;
    margin-top: 20px;
    border-radius: 4px;
    transition: all 500ms ease;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 3.5px;
    font-weight: 600;

    a {
      color: #00adb5;
      text-decoration: none;

      &:hover {
      color: #ffffff;
    }
    }

    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      color: #ffffff;
    }
  }
`;

export const SecondaryTitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 25px;
`;

export const QRCode = styled.div`
  width: 90px;
  border-radius: 4px;
  background-image: url('/wa.link_nzp900.png');
  height: 90px;
  background-size: cover;
`;

export const ImageContainer = styled.div`
  width: 100px;
`;

export const Form = styled.div`
  margin-top: -30px;

  @media(max-width: 768px) {
    margin-top: 0px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin: 20px;

  input {
    width: 100%;
    height: 40px;
    background: #111111;
    outline: none;
    border: 2px solid transparent;
    color: #ffffff;
    padding: 5px 12px;
    border-radius: 4px;
    transition: all 500ms ease;
    font-family: 'Nunito Sans', sans-serif;

    &:focus {
      border-bottom: 2px solid ${(props) => props.theme.colors.primary};;
    }
  }

  textarea {
    width: 100%;
    background: #111111;
    outline: none;
    border: 2px solid transparent;
    border-radius: 4px;
    color: #ffffff;
    transition: all 500ms ease;
    padding: 8px 12px;
    font-family: 'Nunito Sans', sans-serif;

    &:focus {
      border-bottom: 2px solid ${(props) => props.theme.colors.primary};;
    }
  }

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
    height: 38px;
    width: 111px;
    text-align: center;

    &:disabled {
      opacity: .5;
      cursor: not-allowed;
    }

    &:hover:not([disabled]) {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.text};
    }

    @media(max-width: 768px) {
      font-size: 10px;
    }

    .loader {
      color: ${(props) => props.theme.colors.text};
      font-size: 16px;
      animation: rotating 2s linear infinite;
    }

    @keyframes rotating {
      from {
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
`;

export const Snackbar = styled.div`
  background-color: #4AA049;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  width: 250px;
  padding: 15px;
  border-radius: 4px;
  position: fixed;
  bottom: 20px;
  right: 70px;
`;

export const ContactInfos = styled.div`
  margin-top: 12px;

  .item-arrow {
    color: ${(props) => props.theme.colors.primary};
    margin-right: 15px;
    position: relative;
    top: 3px;
    font-size: 12px;
  }

  p {
    font-size: 12px;
    letter-spacing: 0.7px;
    opacity: .8;
  }

  > div {
    margin-right: 40px;

    @media(max-width: 520px) {
      margin-right: 20px;
    }
  }
`;
