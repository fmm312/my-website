import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Switch from 'react-switch';
import Fade from 'react-reveal/Fade';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import { Container, ResposiveMenuButton, ResponsiveMenu } from './styles';

const itens = [
  {
    name: 'About',
    number: '01.',
    target: 'about',
  },
  {
    name: 'Experience',
    number: '02.',
    target: 'experience',
  },
  {
    name: 'Skills',
    number: '03.',
    target: 'skills',
  },
  {
    name: 'Projects',
    number: '04.',
    target: 'portfolio',
  },
  {
    name: 'Contact',
    number: '05.',
    target: 'contact',
  },
];

interface HeaderProps {
  toggleTheme: () => void,
  theme: boolean
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  const [showHeader, setShowHeader] = useState(false);
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setShowHeader(window.pageYOffset > 200));
    }
  }, []);

  function toggleResponsiveMenu() {
    setShowResponsiveMenu(!showResponsiveMenu);
  }

  function selectMenu(target) {
    setShowResponsiveMenu(false);
    dispatch({ type: 'SELECT_MENU', selected: target });
  }

  return (
    <Container showHeader={showHeader}>
      <p onClick={() => selectMenu('welcome')}>F</p>

      <div>
        <div>
          {itens.map((item) => (
            <>
              <span className="menuNumber">
                {item.number}
              </span>

              <span className="menuName" onClick={() => selectMenu(item.target)}>
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

        <ResposiveMenuButton onClick={toggleResponsiveMenu}>
          <AiOutlineMenu />
        </ResposiveMenuButton>
      </div>

      {showResponsiveMenu && (
        <ResponsiveMenu>
          <AiOutlineClose className="responsiveCloseMenuIcon" onClick={toggleResponsiveMenu} />
          <br />
          {' '}
          <br />
          <Fade right duration={800}>
            {itens.map((item) => (
              <span className="menuName" onClick={() => selectMenu(item.target)}>
                {item.name}
              </span>
            ))}
          </Fade>
        </ResponsiveMenu>
      )}
    </Container>
  );
};

export default Header;
