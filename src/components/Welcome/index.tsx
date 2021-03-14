import React from 'react';

import { Container } from './styles';

const Welcome: React.FC = () => {
  return (
    <Container>
      <h2>Hi,<br /> my name is <br /><span>Felipe</span></h2>
      <h1>
        I develop solutions
      </h1>
      <p>I'm a software engineer based in Boston, MA specializing <br />
      in building (and occasionally designing) exceptional websites, <br />
      applications, and everything in between.</p>
      <button>Get in Touch</button>
    </Container>
  );
}

export default Welcome;