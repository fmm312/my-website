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

  a {
    color: ${(props) => props.theme.colors.text};
  }

  @media(max-width: 768px) {
    display: none;
  }
`;

export const MenuIcons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  background-image: url('/logo2.png');
  width: 40px;
  height: 40px;
  background-size: cover;
  transition: all 300ms ease;
  cursor: pointer;

  @media(max-width: 768px) {
    margin-left: 25px;
  }
`;
