import styled from 'styled-components';

export const Container = styled.div`
  grid-area: menu;
  /* background: rgba(57, 62, 70, .3); */
  color: ${(props) => props.theme.colors.text};
  border-radius: 0px 6px 6px 0px;
  width: 80px;
  position: fixed;
  bottom: 10%;
  padding: 30px 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 8px; */
  opacity: .8;
  transition: all 300ms;

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

  > span {
    border-right: 1px solid ${(props) => props.theme.colors.text};
    height: 100px;
    position: fixed;
    bottom: 0;
    opacity: .2;
  }

  a {
    color: ${(props) => props.theme.colors.text};
  }
`;
