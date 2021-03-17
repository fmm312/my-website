import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 100px;
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

  .projects-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    > div {
      width: 32%;
      background-color: rgba(57,62,70,.3);
      height: 220px;
      border-radius: 8px;
      transition: all .3s;
      margin-bottom: 30px;
      
      &:hover {
          /* opacity: .7; */
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
          transform: translateY(-5px);
          filter: brightness(1.25);
      }

      .project-card-header {
        border-bottom: 1px solid rgba(255,255,255,.1);
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        > span {
          padding-left: 25px;
          opacity: .6;
          color: ${props=> props.theme.colors.text};
          font-family: 'Nunito Sans', sans-serif;
        }

        > div {
          padding-right: 25px;
        }

        .icon {
          color: ${props=> props.theme.colors.text};
          font-size: 18px;
        }

        .icon:first-child {
          margin-right: 15px;
        }
      }

      .project-card-body {
        padding: 20px;
        display: flex;
        flex-direction: column;

        .icon-arrow {
          color: ${props=> props.theme.colors.primary};
          font-size: 12px;
          margin-right: 10px;
        }

        .title {
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          font-weight: 900;
          color: ${props=> props.theme.colors.primary};
          margin-bottom: 2px;
        }

        .tecnologies {
          font-family: 'Nunito Sans', sans-serif;
          font-size: 12px;
          color: ${props=> props.theme.colors.text};
          font-weight: 300;
          letter-spacing: 1px;
        }

        .description {
          opacity: .8;
          font-size: 16px;
          color: ${props=> props.theme.colors.text};
        }
      }
    }
  }
  
`;