import Fade from 'react-reveal/Fade';

import { 
  Container,
  Content,
  QRCode,
  ImageContainer
} from './styles';

import Title from '../../components/Title';

const Contact: React.FC = () => {
  return (
    <Fade left duration={2000}>
      <Container>
        <Title 
          title="Contact"
          step="05."
          disabledLine
        />
        
        <Content>
            <div>
              <p>
                Although I'm not currently looking for any 
                new opportunities, my inbox is always open. 
                Whether you have a question or just want to say hi, 
                I'll try my best to get back to you! <br /><br />Send me an email to <b>fmm312@gmail.com</b>, 
                send a message via whatsapp scanning the QRCode on the side.
              </p>
            </div>
            
          <ImageContainer>
            <QRCode />
          </ImageContainer>
        </Content>
      </Container>
    </Fade>
  );
}

export default Contact;