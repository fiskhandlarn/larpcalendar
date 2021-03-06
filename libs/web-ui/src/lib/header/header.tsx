import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Heading,
  Link,
  MenuButton,
  Spinner,
  Stack,
  useColorMode,
} from '@chakra-ui/react';

import ColorModeToggle from '../color-mode-toggle/color-mode-toggle';
import { FunctionComponent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import UserMenu from '../user-menu/user-menu';

/* eslint-disable-next-line */
export interface HeaderProps {
  title?: string;
}

export const Header: FunctionComponent<HeaderProps> = ({ title }) => {
  return (
    <Box
      as="header"
      mx="auto"
      maxW="7xl"
      py={{ base: '2', md: '4' }}
      px={{ base: '4', md: '8' }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Link as={RouterLink} to="/">
          <Heading fontSize="xl" as="p">
            {title}
          </Heading>
        </Link>

        <ButtonGroup variant="ghost" color="gray.600">
          <ColorModeToggle />
          <UserMenu />
        </ButtonGroup>
      </Stack>
    </Box>
  );
};

export default Header;
