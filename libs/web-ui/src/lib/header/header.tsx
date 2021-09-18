import { Container, Heading, HStack, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {
  title?: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <Container mb={4}>
      <Heading as="p">{title}</Heading>
      <HStack role="navigation">
        <Link as={NavLink} to="/">
          Home
        </Link>

        <Link as={NavLink} to="/about">
          About
        </Link>
      </HStack>
    </Container>
  );
}

export default Header;
