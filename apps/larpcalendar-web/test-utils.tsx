import React, { FunctionComponent, ReactElement, StrictMode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { FirebaseProvider } from '@larpcalendar/firebase';

const AllTheProviders: FunctionComponent = ({ children }) => {
  return (
    <StrictMode>
      <FirebaseProvider>{children}</FirebaseProvider>
    </StrictMode>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
