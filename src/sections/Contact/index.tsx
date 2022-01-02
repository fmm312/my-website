import React from 'react';
import Fade from 'react-reveal/Fade';

import {
  Container,
  Content,
  QRCode,
  ImageContainer,
} from './styles';

import Title from '../../components/Title';

const Contact: React.FC = () => (
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
            My communication channels are always open. Whether you have a question or
            just want to say hi, I'll do my best to get in touch with you!
            {' '}
            <br />
            <br />
            Send me an email to
            <b> fmm312@gmail.com </b>
            or
            a message via whatsapp scanning the QR Code on the side.
          </p>
        </div>

        <ImageContainer>
          <QRCode />
        </ImageContainer>
      </Content>
    </Container>
  </Fade>
);

export default Contact;
