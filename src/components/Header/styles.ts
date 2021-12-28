import styled from 'styled-components';

interface ContainerProps {
  showHeader: boolean
}

export const Container = styled.div<ContainerProps>`
  grid-area: header;
  height: ${props => props.showHeader ? 
  '20px' : 
  "50px"}; ;
  box-shadow: ${props => props.showHeader ? 
  'rgba(0, 0, 0, 0.35) 0px 2px 8px' : 
  "none"};
  transition: all 500ms ease;
  background-color: ${props => props.showHeader ? 
  props => props.theme.colors.background : 
  "transparent"};
  color: ${props => props.theme.colors.text};
  opacity: ${props => props.showHeader ? 
  '.9' : 
  "none"};
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  position: fixed;
  width: 100%;

  p {
    color: ${props=> props.theme.colors.primary};
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 22px;
    border: 3px solid ${props=> props.theme.colors.primary};
    border-radius: 7px;
    padding: 0px 11px;
    box-sizing: border-box;
    transition: all 300ms ease;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    margin-left: 60px;

    &:hover {
      filter: brightness(1.75);
    }
  }

  > div {
    display: flex;
    align-items: center;
    margin-right: 60px;

    .icon {
      font-size: 26px;
      margin-right: 8px;
    }
  }

  .menuNumber {
    color: ${props=> props.theme.colors.primary};
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 700;
    margin-right: 4px;
    font-size: 12px;
  }

  .menuName {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    margin-right: 25px;
    transition: 0.5s;
    cursor: pointer;
    letter-spacing: 0.5px;

    &:hover {
      color: ${props=> props.theme.colors.primary};
    }
  }
`;