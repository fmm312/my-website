import { Container } from './styles';

import Zoom from 'react-reveal/Zoom';

const Splash: React.FC = () => {
  return (
    <Container>
      <div className="loader" />
      <Zoom>
       <span>F</span>
      </Zoom>
    </Container>
  );
}

export default Splash;