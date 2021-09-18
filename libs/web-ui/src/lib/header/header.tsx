import { Box, Heading } from '@chakra-ui/react';
import './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {
  title?: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <Box>
      <Heading>{title}</Heading>
    </Box>
  );
}

export default Header;
