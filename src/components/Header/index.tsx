import { useState } from 'react';
import { Container } from './styles';
import Switch from "react-switch";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <p>Logo</p>
      <Switch
        // checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        // offColor={shade(0.15, colors.primary)}
        // onColor={colors.secundary}
      />
    </Container>
  );
}

export default Header;