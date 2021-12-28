import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";

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
      {position > 300 && (
        <Link
            to="home"
            smooth={true}
            offset={-70}
            duration={700}
        >
          <div>
            <BiUpArrow className="icon" />
          </div>
        </Link>
      )}
    </Container>
  );
}

export default Right;