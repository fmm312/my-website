import React from 'react';

import { Container } from './styles';

import { BsPerson } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { IoRocketOutline } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { FiMail } from "react-icons/fi";

const Menu: React.FC = () => {
  return (
    <Container>
      <GoHome className="icon-menu" />
      <BsPerson className="icon-menu" />
      <IoRocketOutline className="icon-menu" />
      <MdComputer className="icon-menu" />
      <FiMail className="icon-menu" />
      <span />
    </Container>
  );
}

export default Menu;