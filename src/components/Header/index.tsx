import { useState, useEffect } from 'react';
import { Container } from './styles';
import Switch from "react-switch";

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
      <p name="home">Logo</p>
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
    </Container>
  );
}

export default Header;