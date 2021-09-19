import { Box } from '@chakra-ui/layout';
import { ChakraProvider } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <ChakraProvider>
      <Box>{children}</Box>
    </ChakraProvider>
  );
};

export default Layout;
