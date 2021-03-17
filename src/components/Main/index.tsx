import React from 'react';

import { Container } from './styles';

import Welcome from '../Welcome';
import About from '../About';
import Carrer from '../Carrer';
import Portfolio from '../Portfolio';
import Articles from '../Articles';
import Contact from '../Contact';

const Main: React.FC = () => {
  return (
    <Container>
      <Welcome />
      <About />
      <Carrer />
      <Portfolio />
      {/* <Articles /> */}
      <Contact />
    </Container>
  );
}

export default Main;