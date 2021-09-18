import { Box } from '@chakra-ui/layout';
import { FunctionComponent } from 'react';

export const Layout: FunctionComponent = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Layout;
