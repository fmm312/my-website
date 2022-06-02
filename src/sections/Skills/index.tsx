import React from 'react';
import Fade from 'react-reveal/Fade';

import { BiRightArrow } from 'react-icons/bi';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { DiCss3, DiReact } from 'react-icons/di';
import { FaGitAlt } from 'react-icons/fa';

import Title from '../../components/Title';

import {
  Container,
  Text,
} from './styles';

const Articles: React.FC = () => (
  <Fade left duration={2000}>
    <Container>
      <Title
        title="Skills"
        step="03."
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text>
          <BiRightArrow className="skill-icon-arrow" />
          {' '}
          <b>Front-end:</b>
          {' '}
          JavaScript, TypeScript, CSS,
          React.js, HTML, Redux, Sass, CSS-in-JS, Bootstrap, Material, Next.js.

          <br />
          <br />

          <BiRightArrow className="skill-icon-arrow" />
          {' '}
          <b>Back-end:</b>
          {' '}
          Node.js, Express.js, MongoDB.

          <br />
          <br />

          <BiRightArrow className="skill-icon-arrow" />
          {' '}
          <b>Git:</b>
          {' '}
          command line fluency, gitflow.
          Tools experience Github, Bitbucket, Gitlab.

          <br />
          <br />

          <BiRightArrow className="skill-icon-arrow" />
          {' '}
          <b>Other skills:</b>
          {' '}
          unit tests with React,
          agile methodologies, UX, Design System.
        </Text>

        <div className="cube-container">
          <div className="cube">
            <div className="cube-side cube-side--front">
              <AiFillHtml5 style={{ color: '#e34c26' }} />
            </div>
            <div className="cube-side cube-side--back">
              <DiCss3 style={{ color: '#136DAE' }} />
            </div>
            <div className="cube-side cube-side--right">
              <SiJavascript style={{ color: '#DD9C2A' }} />
            </div>
            <div className="cube-side cube-side--left">
              <DiReact style={{ color: '#5ED3F3' }} />
            </div>
            <div className="cube-side cube-side--top">
              <FaGitAlt style={{ color: '#E94E31' }} />
            </div>
            <div className="cube-side cube-side--bottom">
              <SiTypescript style={{ color: '#2F74C0' }} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </Fade>
);

export default Articles;
