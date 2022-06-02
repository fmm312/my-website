import styled from 'styled-components';

export const Container = styled.div`
  grid-area: menu;
  background: #111111;
  color: ${(props) => props.theme.colors.text};
  border-radius: 0px 6px 6px 0px;
  width: 60px;
  position: fixed;
  bottom: 0;
  padding: 30px 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 8px;
  transition: all 300ms;
  height: 100vh;

  :hover {
    opacity: initial;
  }

  .icon-menu {
    font-size: 22px;
    margin-bottom: 24px;
    cursor: pointer;
    transition: all 400ms ease;
  }

  .icon-menu:hover, .active {
    color: ${(props) => props.theme.colors.primary};
    transform: translateY(-4px);
  }

  /* > span {
    border-right: 1px solid ${(props) => props.theme.colors.text};
    height: 100px;
    position: fixed;
    bottom: 0;
    opacity: .2;
  } */

  a {
    color: ${(props) => props.theme.colors.text};
  }

  @media(max-width: 520px) {
    display: none;
  }
`;

export const MenuIcons = styled.div`
  display: flex;
  flex-direction: column;
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
  transition: all 300ms ease;
  cursor: pointer;

  &:hover {
    filter: brightness(1.75);
  }

  @media(max-width: 520px) {
    margin-left: 25px;
  }
`;
