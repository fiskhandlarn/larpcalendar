import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { AppProvider } from '@larpcalendar/firebase';

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
  document.getElementById('root')
);
