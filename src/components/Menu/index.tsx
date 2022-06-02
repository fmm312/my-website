import { useDispatch } from 'react-redux';

import {
  AiOutlineMedium,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import {
  Container,
  MenuIcons,
  Logo,
} from './styles';

const Menu: React.FC = () => {
  const list = [
    {
      item: <FiGithub className="icon-menu" />,
      target: 'https://github.com/fmm312',
      name: 'home',
    },
    {
      item: <FiLinkedin className="icon-menu" />,
      target: 'https://www.linkedin.com/in/felipemenezesmagalhaes/',
    },
    {
      item: <AiOutlineMedium className="icon-menu" />,
      target: 'https://medium.com/@fmm312',
    },
    {
      item: <AiOutlineInstagram className="icon-menu" />,
      target: 'https://www.instagram.com/felipemenezes312/',
    },
    {
      item: <AiOutlineWhatsApp className="icon-menu" />,
      target: 'https://wa.link/nzp900',
    },
  ];

  const dispatch = useDispatch();

  return (
    <Container>
      <Logo onClick={() => dispatch({ type: 'SELECT_MENU', selected: '' })} />

      <MenuIcons>
        {list.map((element) => (
          <a
            href={element.target}
            target="_blank"
            rel="noreferrer"
          >
            {element.item}
          </a>
        ))}
      </MenuIcons>
    </Container>
  );
};

export default Menu;
