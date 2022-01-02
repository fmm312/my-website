import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  margin-top: -15px;
  display: flex;

  @media(max-width: 520px) {
    flex-direction: column;
  }

  > div {
    margin-right: 80px;

    @media(max-width: 520px) {
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
  width: 200px;
  border-radius: 4px;
  background-image: url('/wa.link_nzp900.png');
  height: 200px;
  background-size: cover;
`;

export const ImageContainer = styled.div`
  width: 100px;
`;
