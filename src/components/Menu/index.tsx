import { Container } from './styles';

import { BsPerson } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { IoRocketOutline } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { FiMail } from "react-icons/fi";

import { Link } from "react-scroll";

const Menu: React.FC = () => {
  const list = [
    {
      item: <GoHome className="icon-menu" />,
      target: 'home'
    },
    {
      item: <BsPerson className="icon-menu" />,
      target: 'profile'
    },
    {
      item: <IoRocketOutline className="icon-menu" />,
      target: 'carrer'
    },
    {
      item: <MdComputer className="icon-menu" />,
      target: 'portfolio'
    },
    {
      item: <FiMail className="icon-menu" />,
      target: 'contact'
    },
  ]

  return (
    <Container>
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
      <span />
    </Container>
  );
}

export default Menu;