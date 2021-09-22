import { ChakraProvider, Box } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Body from '../body/body';

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
