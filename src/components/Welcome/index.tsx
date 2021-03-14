import React from 'react';

import { Container } from './styles';

const Welcome: React.FC = () => {
  return (
    <Container>
      <p>Hi, my name is</p>
      <h1>Brittany Chiang.<br />I build things for the web.</h1>
      <p>I'm a software engineer based in Boston, MA specializing <br />
      in building (and occasionally designing) exceptional websites, <br />
      applications, and everything in between.</p>
      <button>Get in Touch</button>
    </Container>
  );
}

export default Welcome;