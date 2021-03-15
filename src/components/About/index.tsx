import React from 'react';

import { Container } from './styles';

import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { DiCss3, DiSass } from "react-icons/di";
import { AiFillHtml5 } from 'react-icons/ai';
import { SiJquery, SiRedux, SiTypescript } from 'react-icons/si';
import { BiRightArrow }from 'react-icons/bi';

const About: React.FC = () => {
  return (
    <Container>
      <h1>About me</h1>
      <div className="line-bellow-title" />
      
      <div>
        <p>
          I'm a guy who loves working with challenging and 
          creative projects. I love to develop solutions through 
          technology and positively impact people, I am in constant 
          search for best practices and also trying new things.
          I am a JavaScript enthusiast and my specialty is front-end
          development using React/React Native. I also have aptitude for 
          back end development with Node.js, in addition to solid knowledge in 
          UX, interface design and systems usability.
        </p>

        <div>
          <h4>
           <BiRightArrow  className="skill-icon-arrow"/>
            Technologies I master
          </h4>
          <IoLogoJavascript className="skill-icon" />
          <FaReact className="skill-icon" />
          <SiTypescript className="skill-icon" />
          <DiCss3 className="skill-icon" />
          <DiSass className="skill-icon" />
          <AiFillHtml5 className="skill-icon" />
          <SiJquery className="skill-icon" />
          <SiRedux className="skill-icon" />
        </div>
        
      </div>
     
     
    </Container>
  );
}

export default About;