import { useState, useEffect } from 'react';
import Typist from 'react-typist';

import Fade from 'react-reveal/Fade';

import { Container } from './styles';

const Welcome: React.FC = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <Container>
      <Fade bottom duration={500}>
        <h2>Hi,<br /> my name is <br /><span>Felipe</span></h2>
      </Fade>

      <Fade bottom duration={500} delay={500}>
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
      </Fade>

      <Fade bottom duration={500} delay={1000}>
      <button>Get in Touch</button>
      </Fade>
    </Container>
  );
}

export default Welcome;