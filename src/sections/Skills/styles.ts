import styled from 'styled-components';

export const Container = styled.div`
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;

  @media(max-width: 768px) {
   font-size: 14px;
  }

  .cube {
    position: relative;
    width: 80px;
    height: 80px;
    display: block;
    transform-style: preserve-3d;
    animation: rotate 7s infinite;
    transition: all 0.5s;
    margin-right: 70px;
    font-size: 60px;
  }

  .cube-container {
    display: inline-block;

    transform: scale(1.5);
  }

  .cube-side {
    width: 100%;
    height: 100%;
    position: absolute;
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cube-side--front {
    background-color: rgba(255, 255, 255, .4);  
    animation: blowout-front 7s infinite;
    transform: rotateY(0deg) translateZ(40px);
  }
  .cube-side--back {
    background-color: rgba(255, 255, 255, .4);
    transform: rotateX(180deg) translateZ(40px);
    animation: blowout-back 7s infinite;
  }

  .cube-side--left {
    background-color: rgba(255, 255, 255, .4);
    transform: rotateY(-90deg) translateZ(40px);
    animation: blowout-left 7s infinite;
  }

  .cube-side--right {
    background-color: #506784;
    transform: rotateY(90deg) translateZ(40px);
    animation: blowout-right 7s infinite;
  }

  .cube-side--top {
    background-color: rgba(255, 255, 255, .4);
    transform: rotateX(90deg) translateZ(40px);
    animation: blowout-top 7s infinite;
  }

  .cube-side--bottom {
    background-color: rgba(255, 255, 255, .4);
    transform: rotateX(-90deg) translateZ(40px);
    animation: blowout-bottom 7s infinite;
  }

  @keyframes rotate {
      0% {
        transform: rotateX(0deg) rotateY(0deg);
      }
      20% {
        transform: rotateX(320deg) rotateY(320deg);
    }
      100% {
        transform: rotateX(360deg) rotateY(360deg);
    }
  }

  @keyframes blowout-bottom {
    20% {
        transform: rotateX(-90deg) translateZ(40px);
    }
    30% {
      transform: rotateX(-90deg) translateZ(120px);
    }
    80% {
      transform: rotateX(-90deg) translateZ(120px);
    }
  }

  @keyframes blowout-front {
    20% {
      transform: rotateY(0deg) translateZ(40px);
    }
    30% {
      transform: rotateY(0deg) translateZ(120px);
    }
    80% {
      transform: rotateY(0deg) translateZ(120px);
    }
  }

  @keyframes blowout-top {
    20% {
    transform: rotateX(90deg) translateZ(40px);
    }
    30% {
    transform: rotateX(90deg) translateZ(120px);
    }
    80% {
    transform: rotateX(90deg) translateZ(120px);
    }
  }

  @keyframes blowout-back {
    20% {
    transform: rotateX(180deg) translateZ(40px);
    }
    30% {
    transform: rotateX(180deg) translateZ(120px);
    }
    80% {
    transform: rotateX(180deg) translateZ(120px);
    }
  }

  @keyframes blowout-right {
    20% {
    transform: rotateY(90deg) translateZ(40px);
    }
    30% {
    transform: rotateY(90deg) translateZ(120px);
    }
    80% {
    transform: rotateY(90deg) translateZ(120px);
    }
  }

  @keyframes blowout-left {
    20% {
    transform: rotateY(-90deg) translateZ(40px);
    }
    30% {
    transform: rotateY(-90deg) translateZ(120px);
    }
    80% {
    transform: rotateY(-90deg) translateZ(120px);
    }
  }
`;

export const Text = styled.p`
  width: 50%;

  @media(max-width: 768px) {
    width: 100%;
  }

.skill-icon-arrow {
    color: ${(props) => props.theme.colors.primary};
    margin-right: 15px;
    position: relative;
    top: 3px;
    font-size: 12px;
  }
`;

export const SkillsDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 768px) {
    flex-wrap: wrap;
  }
`;
