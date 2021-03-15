import React from 'react';

import { Container } from './styles';

const Welcome: React.FC = () => {
  return (
    <Container>
      <h2>Hi,<br /> my name is <br /><span>Felipe</span></h2>
      <h1>
        I develop solutions
      </h1>
      <p>I'm a guy who loves working with challenging and creative projects. 
        I love to develop solutions through technology and positively impact people, 
        I am in constant search for best practices and also trying new things.
      </p>
      <button>Get in Touch</button>
    </Container>
  );
}

export default Welcome;