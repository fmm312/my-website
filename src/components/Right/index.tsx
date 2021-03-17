import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import { BiUpArrow }from 'react-icons/bi';

const Right: React.FC = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setPosition(window.scrollY);
    })
  }, []);

  return (
    <Container>
      {/* <p>fmm312@gmail.com</p>
      <span /> */}

      {position > 300 && (
        <div>
          <BiUpArrow className="icon" />
        </div>
      )}
    </Container>
  );
}

export default Right;