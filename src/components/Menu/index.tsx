import Fade from 'react-reveal/Fade';
import { Link } from "react-scroll";

import { Container } from './styles';

import { 
  AiOutlineMedium, 
  AiOutlineInstagram,
  AiOutlineWhatsApp
} from "react-icons/ai";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Menu: React.FC = () => {
  const list = [
    {
      item: <FiGithub className="icon-menu" />,
      target: 'home'
    },
    {
      item: <FiLinkedin className="icon-menu" />,
      target: 'https://www.linkedin.com/in/felipemenezesmagalhaes/'
    },
    {
      item: <AiOutlineMedium className="icon-menu" />,
      target: 'carrer'
    },
    {
      item: <AiOutlineInstagram className="icon-menu" />,
      target: 'portfolio'
    },
    {
      item: <AiOutlineWhatsApp className="icon-menu" />,
      target: 'portfolio'
    },
  ]

  return (
    <Container>
      <Fade bottom duration={500} delay={1800}>
        {list.map((element) => (
          <Link
            to={element.target}
            smooth={true}
            offset={-70}
            duration={700}
          >
            {element.item}
          </Link>
        ))}
      </Fade>
      <span />
    </Container>
  );
}

export default Menu;