import styled from 'styled-components';

export const Container = styled.div`
  grid-area: right;

  p {
    transform: rotate(90deg);
    color: ${(props) => props.theme.colors.text};
    letter-spacing: 2px;
    font-size: 14px;
    position: fixed;
    bottom: 220px;
    right: -80px;
  }

  span {
    border-right: 1px solid ${(props) => props.theme.colors.text};
    height: 100px;
    position: fixed;
    bottom: 0;
    right: 40px;
    opacity: .2;
  }
`;
