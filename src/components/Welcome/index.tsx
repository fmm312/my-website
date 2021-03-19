import { useState, useEffect } from 'react';
import Typist from 'react-typist';

import { Container } from './styles';

const Welcome: React.FC = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <Container>
      <h2>Hi,<br /> my name is <br /><span>Felipe</span></h2>

      <div>
        <span className="title">I develop</span>
          {count ? (
            <Typist onTypingDone={() => setCount(0)} avgTypingDelay={100}>
              <span className="title">web aplications.</span>
              <Typist.Backspace count={16} delay={3000} />
              <span className="title">mobile aplications.</span>
              <Typist.Backspace count={19} delay={3000} />
              <span className="title">creative ideas.</span>
              <Typist.Backspace count={15} delay={3000} />
              <span className="title">innovative solutions.</span>
              <Typist.Backspace count={21} delay={3000} />
            </Typist>
          ) :  ""}
      </div>
      
      <p>I'm a guy who loves working with challenging and creative projects. 
        I love to develop solutions through technology and positively impact people, 
        I am in constant search for best practices and also trying new things.
      </p>
      <button>Get in Touch</button>
    </Container>
  );
}

export default Welcome;