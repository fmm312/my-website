import { 
  Container,
  Content,
  Description,
  SkillsContainer,
  ImageContainer
} from './styles';

import Title from '../../components/Title';

import { BiRightArrow } from 'react-icons/bi';

const About: React.FC = () => {
  return (
    <Container>
      <Title 
        title="About"
        step="01."
      />
      
      <Content>
        <div>
          <Description>
            I'm a guy who loves working with challenging and creative projects. 
            I love developing solutions through technology and impacting people positively, 
            I am constantly looking for best practices and also trying new things. My main skills are:
          </Description>

          <SkillsContainer>
            <div>
              <p><BiRightArrow  className="skill-icon-arrow"/>JavaScript</p>
              <p><BiRightArrow  className="skill-icon-arrow"/>React</p>
              <p><BiRightArrow  className="skill-icon-arrow"/>CSS</p>
            </div>

            <div>
              <p><BiRightArrow  className="skill-icon-arrow"/>TypeScript</p>
              <p><BiRightArrow  className="skill-icon-arrow"/>Redux</p>
              <p><BiRightArrow  className="skill-icon-arrow"/>Material UI</p>
            </div>

            <div>
              <p><BiRightArrow  className="skill-icon-arrow"/>Node</p>
              <p><BiRightArrow  className="skill-icon-arrow"/>Git</p>
              <p><BiRightArrow  className="skill-icon-arrow"/>Next</p>
            </div>
          </SkillsContainer>
        </div>

       <div>
        <ImageContainer />
       </div>
      </Content>
    </Container>
  );
}

export default About;