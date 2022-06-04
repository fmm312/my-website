import styled from 'styled-components';

interface ContainerProps {
  showHeader: boolean
}

export const Container = styled.div<ContainerProps>`
  grid-area: header;
  height: ${(props) => (props.showHeader
    ? '20px'
    : '50px')}; ;
  box-shadow: ${(props) => (props.showHeader
    ? 'rgba(0, 0, 0, 0.35) 0px 2px 8px'
    : 'none')};
  transition: all 500ms ease;
  background-color: ${(props) => (props.showHeader
    ? (props) => props.theme.colors.background
    : 'transparent')};
  color: ${(props) => props.theme.colors.text};
  opacity: ${(props) => (props.showHeader
    ? '.9'
    : 'none')};
  padding: 20px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1000;
  position: fixed;
  right: 0;
  width: 95%;

  > div {
    display: flex;
    align-items: center;
    margin-right: 60px;

    @media(max-width: 520px) {
      margin-right: 25px;
    }

    > div {
      @media(max-width: 520px) {
        display: none;
      }
    }

    .icon {
      font-size: 26px;
      margin-right: 8px;
    }
  }

  .menuNumber {
    color: ${(props) => props.theme.colors.primary};
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 700;
    margin-right: 4px;
    font-size: 13px;
  }

  .menuName {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    margin-right: 25px;
    transition: 0.5s;
    cursor: pointer;
    letter-spacing: 0.5px;
    border-bottom: 2px solid transparent;
    padding-bottom: 5px;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
      border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    }

    @media(max-width: 520px) {
      margin-right: 0px;
      margin-bottom: 20px;
    }
  }
`;

export const Logo = styled.div`
  background-image: url('/logo2.png');
  width: 40px;
  height: 40px;
  background-size: cover;
  transition: all 300ms ease;
  cursor: pointer;
  position: absolute;
  top: 28px;
  left: 5px;

  &:hover {
    filter: brightness(1.75);
  }

  @media(min-width: 769px) {
    display: none !important;
  }
`;

export const ResponsiveMenu = styled.div`
  display: none !important;

  @media(max-width: 768px) {
    display: flex !important;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    min-width: 100%;
    height: 60px;
    background-color: #111111;
    font-size: 24px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 8px;
    transition: all 500ms ease;

    > span {
      &:focus,
      &:active {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;
