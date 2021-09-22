import { Box, ChakraProvider } from '@chakra-ui/react';

import Body from '../body/body';
import Footer from '../footer/footer';
import { FunctionComponent } from 'react';
import Header from '../header/header';

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <Box>
      <Header title="Larp Calendar" />
      <Body>{children}</Body>
      <Footer />
    </Box>
  );
};

export default Layout;
