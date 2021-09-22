import { Box, Container } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

/* eslint-disable-next-line */
export interface BodyProps {}

export const Body: FunctionComponent<BodyProps> = ({ children }) => {
  return (
    <Box
      as="main"
      role="main"
      mx="auto"
      maxW="7xl"
      py={{ base: '2', md: '4' }}
      px={{ base: '4', md: '8' }}
    >
      {children}
    </Box>
  );
};

export default Body;
