import { useState } from 'react';

import { Container } from './styles';

import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { DiCss3, DiSass } from "react-icons/di";
import { AiFillHtml5 } from 'react-icons/ai';
import { SiJquery, SiRedux, SiTypescript } from 'react-icons/si';
import { BiRightArrow }from 'react-icons/bi';

const About: React.FC = () => {
  const [isChecked, setIsChecked] = useState('1');

  function renderCategories() {
    switch (isChecked) {
      case '1':
        return (
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
        )

      case '2':
        return (
          <div>
            <h4>
              <BiRightArrow  className="skill-icon-arrow"/>
              Tools that work
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
        )

      case '3':
        return (
          <div>
            <h4>
              <BiRightArrow  className="skill-icon-arrow"/>
              Other technologies I use
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
        )
    }
  }

  return (
    <Container>
      <h1 name="profile">About me</h1>
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
          {renderCategories()}

          <div style={{ display: 'flex' }}>
            <div 
              className="form-control"
              onClick={() => setIsChecked('1')}
            >
              <div className="radio-button">
                {isChecked === '1' && <div className="radio-button-bullet"/>}
              </div>
              <span>Tecnologies</span>
            </div>

            <div 
              className="form-control" 
              onClick={() => setIsChecked('2')}
            >
              <div className="radio-button">
                {isChecked === '2' && <div className="radio-button-bullet"/>}
              </div>
              <span>Tools</span>
            </div>

            <div 
              className="form-control"
              onClick={() => setIsChecked('3')}
            >
              <div className="radio-button">
                {isChecked === '3' && <div className="radio-button-bullet"/>}
              </div>
              <span>Others</span>
            </div>
          </div>
        </div>
      </div>
     
     
    </Container>
  );
}

export default About;