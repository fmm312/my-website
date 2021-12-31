import React from 'react';
import Fade from 'react-reveal/Fade';

import {
  Container,
  Content,
  Text,
} from './styles';

import Title from '../../components/Title';

const Portfolio: React.FC = () => (
  <Fade left duration={2000}>
    <Container>
      <Title
        title="Projects"
        step="04."
      />

      {/* <Filters>
          <ButtonFilter>
            Open Source
          </ButtonFilter>

          <ButtonFilter>
            Posts
          </ButtonFilter>
        </Filters> */}

      <Content>
        <Text>
          My Github repository is where I host code for some interesting projects
          I've done during my programming career.
        </Text>

        <a href="https://github.com/fmm312" target="_blank" rel="noreferrer">
          <button>
            Go to github
          </button>
        </a>
      </Content>
    </Container>
  </Fade>
);

export default Portfolio;
