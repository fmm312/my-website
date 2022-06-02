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

  @media(min-width: 1600px) {
    justify-content: space-around;
  }

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

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }

    @media(max-width: 520px) {
      margin-right: 0px;
      margin-bottom: 20px;
    }
  }
`;

export const ResposiveMenuButton = styled.button`
  display: none;

  @media(max-width: 520px) {
    display: initial;
    margin-left: 10px;
    background: transparent;
    color: #ffffff;
    font-size: 24px;
    border: none;
    position: relative;
    top: 3px;
  }
`;

export const ResponsiveMenu = styled.div`
  display: none !important;

  .responsiveCloseMenuIcon {
    position: absolute;
    right: 12px;
    font-size: 20px;
  }

  @media(max-width: 520px) {
    width: 180px;
    height: 200vh;
    background: ${(props) => props.theme.colors.primary};
    position: absolute;
    right: -25px;
    top: 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 8px;
    color: #ffffff;
    display: flex !important;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  background-image: url('/logo.png');
  width: 40px;
  height: 40px;
  background-size: cover;
  margin-left: 60px;
  transition: all 300ms ease;
  cursor: pointer;

  &:hover {
    filter: brightness(1.75);
  }

  @media(max-width: 520px) {
    margin-left: 25px;
  }
`;
