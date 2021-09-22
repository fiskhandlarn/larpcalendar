import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { ColorModeScript } from '@chakra-ui/react';

import { FirebaseProvider } from '@larpcalendar/firebase';
import { theme } from '@larpcalendar/web-ui';

import App from './app/app';

ReactDOM.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <StrictMode>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </StrictMode>
  </>,

  document.getElementById('root')
);
