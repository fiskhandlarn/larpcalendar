import React, { FunctionComponent, ReactElement, StrictMode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseProvider } from '@larpcalendar/firebase';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { theme } from '@larpcalendar/web-ui';

const AllTheProviders: FunctionComponent = ({ children }) => {
  return (
    <StrictMode>
      <FirebaseProvider>
        <ChakraProvider theme={theme}>
          <BrowserRouter>{children}</BrowserRouter>
        </ChakraProvider>
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
