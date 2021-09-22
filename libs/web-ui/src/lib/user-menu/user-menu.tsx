import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Spinner,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import { signOut, User } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { FunctionComponent } from 'react-router/node_modules/@types/react';
import { useAuth, useUser } from 'reactfire';
import { FaSignOutAlt, FaCog } from 'react-icons/fa';

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
