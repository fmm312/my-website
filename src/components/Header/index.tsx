import { useState, useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import Switch from 'react-switch';

import { Container } from './styles';

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
                style={
                  selected === item.target
                    ? { color: '#00adb5' }
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
    </Container>
  );
};

export default Header;
