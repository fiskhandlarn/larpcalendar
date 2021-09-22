import * as ReactDOM from 'react-dom';

import { App } from './app/app';
import { ColorModeScript } from '@chakra-ui/react';
import { FirebaseProvider } from '@larpcalendar/firebase';
import { StrictMode } from 'react';
import { theme } from '@larpcalendar/web-ui';

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
