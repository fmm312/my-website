import styled from "styled-components";

export const Container = styled.div`
  grid-area: right;
  position: fixed;
  top: 40%;
  right: 0px;
  width: 40px;
  padding-right: 30px;

  p {
    transform: rotate(90deg);
    color: ${props => props.theme.colors.text};
    letter-spacing: 2px;
    font-size: 12px;
    margin-right: 70px;
    top: 125px;
    position: relative;
  }

  span {
    border-right: 1px solid ${props => props.theme.colors.text};
    height: 80px;
    position: fixed;
    bottom: 0;
  }

  > div {
    width: 20px;
    height: 20px;
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 6px;
    padding: 12px;
    text-align: center;
    position: fixed;
    bottom: 30px;
    transition: all 300ms ease;
    cursor: pointer;

    &:hover {
      background-color: ${props => props.theme.colors.primary};
    }

    .icon {
      color: ${props => props.theme.colors.text};
    }
  }
`;