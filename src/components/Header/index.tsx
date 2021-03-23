import { useState, useEffect } from 'react';
import { Container } from './styles';
import Switch from "react-switch";

import { WiMoonAltWaningCrescent2 }from 'react-icons/wi';

const Header: React.FC = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    sessionStorage.setItem('theme', checked ? 'dark' : 'light');
  }, [checked]);

  function handleChange() {
    setChecked(!checked);
  }

  return (
    <Container>
      <p name="home">F</p>
      <div>
        <WiMoonAltWaningCrescent2 className="icon" />
        <Switch
          checked={checked}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onChange={handleChange}
          onColor="#00adb5"
        />
      </div>
    </Container>
  );
}

export default Header;