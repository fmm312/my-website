import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

import { BiLoaderAlt } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import {
  Container,
  Content,
  Form,
  FormGroup,
  Snackbar,
  QRCode,
  ImageContainer,
} from './styles';

import Title from '../../components/Title';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const DISABLED_BUTTON = !name || !email || !message;

  function sendMessage() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowSnackbar(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      setTimeout(() => {
        setShowSnackbar(false);
      }, 5000);
    }, 3000);
  }

  return (
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
              <input
                placeholder="Name*"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <input
                placeholder="Email*"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              <input
                placeholder="Subject"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <textarea
                rows={7}
                placeholder="Mensagem*"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <button disabled={DISABLED_BUTTON} onClick={sendMessage}>
                {loading ? (
                  <BiLoaderAlt className="loader" />
                ) : 'Send'}
              </button>
            </FormGroup>
          </Form>
        </div>

        {showSnackbar && (
          <Snackbar>
            <AiOutlineCheckCircle style={{ fontSize: 22 }} />
            {' '}
            Message sent successfully
          </Snackbar>
        )}
      </Container>
    </Fade>
  );
};

export default Contact;
