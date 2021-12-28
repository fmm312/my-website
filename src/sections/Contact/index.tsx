import { 
  Container,
  Content,
  SecondaryTitle
} from './styles';

import Title from '../../components/Title';

const Contact: React.FC = () => {
  return (
    <Container>
      <Title 
        title="Contact"
        step="05."
        disabledLine
      />
      
     <Content>
        <p>
          Although I'm not currently looking for any 
          new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        <button>Say hello</button>
     </Content>
    </Container>
  );
}

export default Contact;