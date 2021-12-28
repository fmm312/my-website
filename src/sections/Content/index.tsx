import Fade from 'react-reveal/Fade';

import { Container } from './styles';

import Welcome from '../Welcome';
import About from '../About';
import Carrer from '../Carrer';
import Portfolio from '../Portfolio';
import Articles from '../BlogPosts';
import Contact from '../Contact';
import Footer from '../Footer';

const Content: React.FC = () => {
  return (
    <Container>
      <span name="home" />
      <Welcome />
      <Fade bottom duration={2000}>
        <About />
      </Fade>

      <Fade bottom duration={2000}>
        <Carrer />
      </Fade>

      <Fade bottom duration={2000}>
        <Portfolio />
      </Fade>

      <Fade bottom duration={2000}>
        <Articles />
      </Fade>
      
      <Fade bottom duration={2000}>
        <Contact />
      </Fade>

      <Fade bottom duration={2000}>
        <Footer />
      </Fade>
    </Container>
  );
}

export default Content;