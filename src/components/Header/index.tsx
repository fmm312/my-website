import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import Switch from 'react-switch';

import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { FaRegLightbulb } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { DiCodeBadge } from 'react-icons/di';

import { Container, ResponsiveMenu, Logo } from './styles';

const itens = [
  {
    name: 'About',
    number: '01.',
    target: 'about',
    icon: <AiOutlineUser />,
    id: 1,
  },
  {
    name: 'Experience',
    number: '02.',
    target: 'experience',
    icon: <DiCodeBadge />,
    id: 2,
  },
  {
    name: 'Skills',
    number: '03.',
    target: 'skills',
    icon: <HiOutlineDesktopComputer />,
    id: 3,
  },
  {
    name: 'Projects',
    number: '04.',
    target: 'portfolio',
    icon: <FaRegLightbulb />,
    id: 4,
  },
  {
    name: 'Contact',
    number: '05.',
    target: 'contact',
    icon: <FiMail />,
    id: 5,
  },
];

interface HeaderProps {
  toggleTheme: () => void,
  theme: boolean
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  const [showHeader, setShowHeader] = useState(false);
  const dispatch = useDispatch();
  const selected = useSelector((state: RootStateOrAny) => state.menu.selected);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setShowHeader(window.pageYOffset > 200));
    }
  }, []);

  function selectMenu(target) {
    dispatch({ type: 'SELECT_MENU', selected: target });
  }

  return (
    <Container showHeader={showHeader}>
      <div>
        <div>
          {itens.map((item) => (
            <>
              <span className="menuNumber">
                {item.number}
              </span>

              <span
                className="menuName"
                key={item.id}
                style={
                  selected === item.target
                    ? { color: '#00adb5', borderBottom: '2px solid #00adb5' }
                    : null
                }
                onClick={() => selectMenu(item.target)}
              >
                {item.name}
              </span>
            </>
          ))}
        </div>

        <Switch
          checked={theme}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={40}
          handleDiameter={20}
          onChange={toggleTheme}
          onColor="#00adb5"
        />
      </div>

      <Logo onClick={() => dispatch({ type: 'SELECT_MENU', selected: '' })} />

      <ResponsiveMenu>
        {itens.map((item) => (
          <span
            onClick={() => selectMenu(item.target)}
          >
            {item.icon}
          </span>
        ))}
      </ResponsiveMenu>
    </Container>
  );
};

export default Header;
