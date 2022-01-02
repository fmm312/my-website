import React from 'react';
import Particles from 'react-particles-js';
import { useSelector, RootStateOrAny } from 'react-redux';

import { Container } from './styles';

import Welcome from '../../sections/Welcome';
import About from '../../sections/About';
import Carrer from '../../sections/Carrer';
import Portfolio from '../../sections/Portfolio';
import Skills from '../../sections/Skills';
import Contact from '../../sections/Contact';

const Content: React.FC = () => {
  const selected = useSelector((state: RootStateOrAny) => state.menu.selected);

  function setSelectedSection() {
    switch (selected) {
      case 'welcome':
        return <Welcome />;
      case 'about':
        return <About />;
      case 'experience':
        return <Carrer />;
      case 'skills':
        return <Skills />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Welcome />;
    }
  }

  return (
    <Container>
      <Particles
        style={{ position: 'absolute', left: 0, top: 0 }}
        width="100%"
        params={{
          particles: {
            number: {
              value: 30,
            },
            size: {
              value: 1.5,
            },
          },
          interactivity: {
            events: {
              onhover: {
              // "enable": true,
              // "mode": "repulse"
              },
            },
          },
        }}
      />
      {setSelectedSection()}
    </Container>
  );
};

export default Content;
