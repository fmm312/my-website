import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 120px;
  color: ${props=> props.theme.colors.text};

  > h1 {
    color: ${props=> props.theme.colors.primary};
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 42px;
    
    
  }

  .line-bellow-title {
    border-bottom: 4px solid ${props=> props.theme.colors.text};
    margin-top: -20px;
    width: 50px;
    margin-bottom: 40px;
  }

  .timeline {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 18px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .line {
    padding: 10px 20px;
    position: relative;
  }

  .line::before {
    position: absolute;
    width: 2px;
    height: 95%;
    left: 20px;
    background-color: ${props=> props.theme.colors.primary};
    content: "";
  }

  .line .content {
    position: relative;
    padding-left: 30px;

    span {
      font-family: 'Nunito Sans', sans-serif;
      font-size: 12px;
      font-weight: 300;
      letter-spacing: 1px;
    }
  }

  .line .content + .content {
    margin-top: 40px;
  }

  .line .content h1 {
    font-size: 16px;
    margin-bottom: 5px;
    margin-top: 15px;
  }

  .line .content p {
    font-size: 16px;
  }

  .line .content::before {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: ${props=> props.theme.colors.primary};
    content: "";
    left: -9px;
    border-radius: 50%;
    top: 3px;
  }
`;