import React from 'react';

import { Container } from './styles';

const Contact: React.FC = () => {
  return (
    <Container>
      <h1>
        Contact
      </h1>
      <div className="line-bellow-title" />

      <div>
        <p>
          Although I'm not currently looking for any 
          new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>

        <button>Send me a email</button>
      </div>
    </Container>
  );
}

export default Contact;