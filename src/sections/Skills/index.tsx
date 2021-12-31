import React from 'react';
import Fade from 'react-reveal/Fade';

import Title from '../../components/Title';

import { BiRightArrow } from 'react-icons/bi';

import {
  Container,
  Text
} from './styles';

const Articles: React.FC = () => {
  return (
    <Fade left duration={2000}>
      <Container>
        <Title 
          title="Skills"
          step="03."
        />

        <Text>
          <BiRightArrow  className="skill-icon-arrow"/> <b>Front-end:</b> JavaScript, TypeScript, CSS, 
          React.js, HTML, Redux, Sass, CSS-in-JS, Bootstrap, Material, Next.js.

          <br /><br />

          <BiRightArrow  className="skill-icon-arrow"/> <b>Back-end:</b> Node.js, Express.js, MongoDB.

          <br /><br />

          <BiRightArrow  className="skill-icon-arrow"/> <b>Git:</b> command line fluency, gitflow. 
          Tools experience Github, Bitbucket, Gitlab.

          <br /><br />

          <BiRightArrow  className="skill-icon-arrow"/> <b>Other skills:</b> unit tests with React, 
          agile methodologies, UX, Design System, CI/CD.
        </Text>
      </Container>
    </Fade>
  );
}

export default Articles;