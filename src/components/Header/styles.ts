import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
  height: 30px;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

    &:hover {
      filter: brightness(1.75);
    }
  }

  > div {
    display: flex;
    align-items: center;

    .icon {
      font-size: 26px;
      margin-right: 8px;
    }
  }

  
`;