import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Container } from './styles';

const Splash: React.FC = () => (
  <Container>
    <div className="loader" />

    <Zoom>
      <span>F</span>
    </Zoom>

    {/* <p>
      Felipe is working
    </p> */}

    <div>
      <div className="progressBar" />
      <div className="loadingProgress" />
    </div>
  </Container>
);

export default Splash;
