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
      target: 'https://github.com/fmm312'
    },
    {
      item: <FiLinkedin className="icon-menu" />,
      target: 'https://www.linkedin.com/in/felipemenezesmagalhaes/'
    },
    {
      item: <AiOutlineMedium className="icon-menu" />,
      target: 'https://medium.com/@fmm312'
    },
    {
      item: <AiOutlineInstagram className="icon-menu" />,
      target: 'https://www.instagram.com/felipemenezes312/'
    },
    {
      item: <AiOutlineWhatsApp className="icon-menu" />,
      target: 'https://wa.link/nzp900'
    },
  ]

  return (
    <Container>
      <Fade bottom duration={500} delay={1800}>
        {list.map((element) => (
          <a href={element.target} target="_blank">
            {element.item}
          </a>
        ))}
      </Fade>
      <span />
    </Container>
  );
}

export default Menu;