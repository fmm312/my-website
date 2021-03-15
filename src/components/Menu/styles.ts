import styled from "styled-components";

export const Container = styled.div`
  grid-area: menu;
  /* background: rgba(57, 62, 70, .3); */
  color: ${props => props.theme.colors.text};
  border-radius: 0px 22px 22px 0px;
  width: 60px;
  position: fixed;
  top: 40%;
  padding: 30px 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); */
  opacity: .8;
  transition: all 300ms;

  :hover {
    opacity: initial
  }

  .icon-menu {
    font-size: 24px;
    margin-bottom: 35px;
    cursor: pointer;
    transition: all 500ms ease;
  }

  .icon-menu:hover {
    color: ${props => props.theme.colors.primary};
  }

  > span {
    border-right: 1px solid ${props => props.theme.colors.text};
    height: 80px;
    position: fixed;
    bottom: 0;
  }
`;