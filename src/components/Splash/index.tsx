import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Container } from './styles';

const Splash: React.FC = () => (
  <Container>
    <div className="loader" />
    <Zoom>
      <span>F</span>
    </Zoom>
  </Container>
);

export default Splash;
