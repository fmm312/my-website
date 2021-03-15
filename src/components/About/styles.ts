import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 100px;
  color: ${props=> props.theme.colors.text};

  > h1 {
    color: ${props=> props.theme.colors.primary};
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 42px;
  }

  h4 {
    color: ${props=> props.theme.colors.text};
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 16px;
  }

  > div {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;

    > p {
      width: 48%;
      font-family: 'Nunito Sans', sans-serif;
      font-size: 18px;
      opacity: .8;
    }

    > div {
      padding-right: 40px;
    }
  }

  .line-bellow-title {
    border-bottom: 4px solid ${props=> props.theme.colors.text};
    margin-top: -20px;
    width: 50px;
    margin-bottom: 40px;
  }

  .skill-icon {
    font-size: 32px;
    margin-right: 20px;
    margin-bottom: 20px;
    opacity: .8;
    transition: all 500ms ease;

    &:hover {
      opacity: initial;
    }
  }

  .skill-icon-arrow {
    color: ${props=> props.theme.colors.primary};
    margin-right: 15px;
    position: relative;
    top: 3px;
  }
`;