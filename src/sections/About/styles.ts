import styled from "styled-components";

export const Container = styled.div`
  
`;

export const Content = styled.div`
  display: flex;
`;

export const Description = styled.div`
  width: 90%;
  opacity: .8;
  letter-spacing: 0.2px;
`;

export const ImageContainer = styled.div`
  width: 280px;
  border-radius: 4px;
  background-image: url('/night-coding.gif');
  height: 170px;
  background-size: cover;

  @media(min-width: 1400px) {
    width: 420px;
    height: 240px;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  margin-top: 12px;

  .skill-icon-arrow {
    color: ${props=> props.theme.colors.primary};
    margin-right: 15px;
    position: relative;
    top: 3px;
    font-size: 12px;
  }

  p {
    font-size: 12px;
    letter-spacing: 0.7px;
    opacity: .8;
  }

  > div {
    margin-right: 40px;
  }
`;