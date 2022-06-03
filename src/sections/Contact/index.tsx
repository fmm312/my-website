import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import axios from 'axios';

import { BiLoaderAlt, BiRightArrow } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import {
  Container,
  Content,
  Form,
  FormGroup,
  Snackbar,
  ContactInfos,
} from './styles';

import Title from '../../components/Title';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const DISABLED_BUTTON = !formValues.name || !formValues.email || !formValues.message || loading;

  function sendMessage() {
    setLoading(true);

    axios.post('https://sheet.best/api/sheets/7e5e806b-ea2c-487d-9737-58c495e040cf', formValues)
      .then(() => {
        setLoading(false);
        setShowSnackbar(true);
        setFormValues({
          name: '',
          email: '',
          subject: '',
          message: '',
        });

        setTimeout(() => {
          setShowSnackbar(false);
        }, 5000);
      });
  }

  function onChangeTextField(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
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

            <ContactInfos>
              <p>
                <BiRightArrow className="item-arrow" />
                Fortaleza - Brasil
              </p>
              <p>
                <BiRightArrow className="item-arrow" />
                Email: fmm312@gmail.com
              </p>
              <p>
                <BiRightArrow className="item-arrow" />
                Phone: +55 (85)98924-9894
              </p>
            </ContactInfos>
          </Content>

          <Form>
            <FormGroup>
              <input
                placeholder="Name*"
                value={formValues.name}
                name="name"
                type="text"
                onChange={onChangeTextField}
              />
            </FormGroup>

            <FormGroup>
              <input
                placeholder="Email*"
                value={formValues.email}
                name="email"
                type="text"
                onChange={onChangeTextField}
              />

              <input
                placeholder="Subject"
                value={formValues.subject}
                name="subject"
                type="text"
                onChange={onChangeTextField}
              />
            </FormGroup>

            <FormGroup>
              <textarea
                rows={7}
                placeholder="Mensagem*"
                value={formValues.message}
                name="message"
                onChange={onChangeTextField}
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
