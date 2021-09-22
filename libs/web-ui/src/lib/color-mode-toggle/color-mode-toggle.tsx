import {
  Button,
  ButtonGroup,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

import { FunctionComponent } from 'react';
export const ColorModeToggle: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const label =
    colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
  const icon =
    colorMode === 'light' ? (
      <FaMoon fontSize="20px" />
    ) : (
      <FaSun fontSize="20px" />
    );
  return (
    <IconButton onClick={toggleColorMode} aria-label={label} icon={icon} />
  );
};

export default ColorModeToggle;
