import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { FirebaseProvider } from '@larpcalendar/firebase';

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </StrictMode>,
  document.getElementById('root')
);
