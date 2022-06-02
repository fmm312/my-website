import React from 'react';
import Fade from 'react-reveal/Fade';

import {
  Container,
  Content,
  Form,
  FormGroup,
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

      <div style={{ display: 'flex' }}>
        <Content>
          <div>
            <p>
              My communication channels are always open. If you have a
              question or just want to say hi, I will do my best to get in touch with you!
              Send me a message by filling out this form or a message via
              whatsapp by scanning the QR Code.
            </p>
          </div>

          <ImageContainer>
            <QRCode />
          </ImageContainer>
        </Content>

        <Form>
          <FormGroup>
            <input placeholder="Name" />
          </FormGroup>

          <FormGroup>
            <input placeholder="Email" />

            <input placeholder="Subject" />
          </FormGroup>

          <FormGroup>
            <textarea rows={7} placeholder="Mensagem" />
          </FormGroup>

          <FormGroup>
            <button>
              send
            </button>
          </FormGroup>
        </Form>
      </div>
    </Container>
  </Fade>
);

export default Contact;
