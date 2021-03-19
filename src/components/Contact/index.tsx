import { Container } from './styles';

import { GoLocation }from 'react-icons/go';
import { BiMailSend, BiPhone }from 'react-icons/bi';
import { AiOutlineWhatsApp }from 'react-icons/ai';

const Contact: React.FC = () => {
  return (
    <Container>
      <h1 name="contact">
        Contact
      </h1>
      <div className="line-bellow-title" />

     <div className="content">
      <div>
        <p>
          Although I'm not currently looking for any 
          new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>

        <button>Send me a email</button>
      </div>

      <div className="divider" />

      <div>
      <p>
          Although I'm not currently looking for any 
          new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        {/* <div className="row">
          <GoLocation className="icon" />
          <p>Fortaleza, Brasil</p>
        </div> */}

        {/* <div className="row">
          <BiMailSend className="icon" />
          <p>fmm312@gmail.com</p>
        </div> */}

        <div className="row">
          <BiPhone className="icon" />
          <p>(85) 98924 98924</p>
        </div>
      </div>
     </div>
    </Container>
  );
}

export default Contact;