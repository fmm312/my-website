import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;

  .loader {
    border: 6px solid ${(props) => props.theme.colors.primary};
    border-radius: 12px;
    border-top: 6px solid ${(props) => props.theme.colors.primary};
    width: 80px;
    height: 80px;
    -webkit-animation: spin 1.8s linear;
    animation: spin 1.8s linear;
  }

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    50% { border-radius: 50%; }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    50% { border-radius: 50%; }
    100% { transform: rotate(360deg); }
  }

  span {
    position: relative;
    bottom: 80px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 50px;
    color: ${(props) => props.theme.colors.primary};
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  > p {
    color: #999;
    font-weight: 700;
    margin-top: -50px;
    margin-bottom: 40px;
  }

  .progressBar {
    width: 300px;
    height: 3px;
    background-color: #555555;
  }

  .loadingProgress {
    background: ${(props) => props.theme.colors.primary};
    height: 3px;
    width: 0;
    margin-top: -3px;
    animation: progressAnimation 1.8s linear;
  }

  @keyframes progressAnimation {
    0% {
      width: 0;
    }

    50% {
      width: 150px;
    }

    100% {
      width: 300px;
    }
  }
`;
