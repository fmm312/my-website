import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;
  padding: 40px 100px 20px 100px;
  text-align: center;

  .icon {
    margin: 0px 8px;
    font-size: 24px;
    border: 1px solid ${props=> props.theme.colors.primary};
    color: ${props=> props.theme.colors.primary};
    padding: 6px;
    border-radius: 4px;
    transition: all 300ms;
    cursor: pointer;

    &:hover {
      filter: brightness(1.75);
      transform: translateY(-4px);
      
    }
  }

  p {
    color: ${props=> props.theme.colors.text};
    font-size: 12px;
    margin-top: 20px;
  }
`;