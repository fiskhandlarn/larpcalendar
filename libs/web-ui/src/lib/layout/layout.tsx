import { Container } from '@chakra-ui/layout';
import { FunctionComponent } from 'react';

export const Layout: FunctionComponent = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
