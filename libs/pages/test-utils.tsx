import React, { FunctionComponent, ReactElement, StrictMode } from 'react';
import { RenderOptions, render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { FirebaseProvider } from '@larpcalendar/firebase';
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
