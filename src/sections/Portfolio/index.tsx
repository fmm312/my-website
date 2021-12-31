import Fade from 'react-reveal/Fade';

import { 
  Container,
  Filters,
  ButtonFilter
} from './styles';

import Title from '../../components/Title';

import { BiRightArrow } from 'react-icons/bi';

const Portfolio: React.FC = () => {
  return (
    <Fade left duration={2000}>
      <Container>
        <Title 
          title="Projects"
          step="04."
        />

        <Filters>
          <ButtonFilter>
            Open Source
          </ButtonFilter>

          <ButtonFilter>
            Posts
          </ButtonFilter>
        </Filters>
      </Container>
    </Fade>
  );
}

export default Portfolio;