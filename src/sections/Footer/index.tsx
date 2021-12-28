import React from 'react';

import { Container } from './styles';

import { AiOutlineWhatsApp }from 'react-icons/ai';
import { FiLinkedin, FiGithub }from 'react-icons/fi';
// import { AiFillGithub }from 'react-icons/ai';

const Footer: React.FC = () => {
  return (
    <Container>
      {/* <div>
        <FiGithub className="icon" />
        <FiLinkedin className="icon" />
        <AiOutlineWhatsApp className="icon" />
      </div> */}
      <p>Desenvolvido com Next.js, TypeScript e Styled Components</p>
    </Container>
  );
}

export default Footer;