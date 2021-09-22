import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useAuth, useUser } from 'reactfire';

import { ChevronDownIcon } from '@chakra-ui/icons';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';

/* eslint-disable-next-line */
export interface UserMenuProps {}

export const UserMenu: FunctionComponent<UserMenuProps> = (_props) => {
  const { status, data: user } = useUser();
  const firebaseAuth = useAuth();
  const toast = useToast();

  const onSignOutClick = async () => {
    try {
      await signOut(firebaseAuth);
      toast({
        title: 'Signed out',
        description: 'Come back soon!',
        status: 'info',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const itemColor = useColorModeValue('gray.800', 'gray.400');

  return status === 'loading' ? (
    <Button disabled={true}>
      <Spinner />
    </Button>
  ) : user ? (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {user.displayName || 'Logged in'}
      </MenuButton>
      <MenuList>
        <MenuItem icon={<FaCog />} color={itemColor}>
          Settings
        </MenuItem>
        <MenuDivider />
        <MenuItem
          onClick={onSignOutClick}
          icon={<FaSignOutAlt />}
          color={itemColor}
        >
          Sign out
        </MenuItem>
      </MenuList>
    </Menu>
  ) : (
    <Button as={Link} to="/auth">
      Sign in
    </Button>
  );
};

export default UserMenu;
