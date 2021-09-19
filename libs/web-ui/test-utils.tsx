import React, { FunctionComponent, ReactElement, StrictMode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { FirebaseProvider } from '@larpcalendar/firebase';

const AllTheProviders: FunctionComponent = ({ children }) => {
  return (
    <StrictMode>
      <FirebaseProvider>
        <BrowserRouter>
          <ChakraProvider>
            <Box>{children}</Box>
          </ChakraProvider>
        </BrowserRouter>
      </FirebaseProvider>
    </StrictMode>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
