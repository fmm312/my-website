import { useState, useEffect } from 'react';
import Switch from "react-switch";

import { Container } from './styles';

const itens = [
  {
    name: 'About',
    number: '01.',
    target: 'home'
  },
  {
    name: 'Experience',
    number: '02.',
    target: 'home'
  },
  {
    name: 'Portfolio',
    number: '03.',
    target: 'home'
  },
  {
    name: 'Posts',
    number: '04.',
    target: 'home'
  },
  {
    name: 'Contact',
    number: '05.',
    target: 'home'
  },
]

interface HeaderProps {
  toggleTheme: () => void,
  theme: boolean
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
      setShowHeader(window.pageYOffset > 200)
      );
    };
  }, []);

  return (
    <Container showHeader={showHeader}>
      <p>F</p>
      
      <div>
        <div>
          {itens.map(item => (
            <>
              <span className="menuNumber">
                {item.number}
              </span>

              <span className="menuName">
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
}

export default Header;