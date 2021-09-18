import { FunctionComponent } from 'react';
import { getFirestore } from '@firebase/firestore';
import { useFirebaseApp, FirestoreProvider } from 'reactfire';
import { AboutPage, EventsPage } from '@larpcalendar/pages';
import { Header, Layout } from '@larpcalendar/web-ui';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export const App: FunctionComponent = () => {
  const firestore = getFirestore(useFirebaseApp());

  return (
    <FirestoreProvider sdk={firestore}>
      <ChakraProvider>
        <BrowserRouter>
          <Layout>
            <Header title="Larp Calendar" />
            <Route path="/" exact component={EventsPage} />
            <Route path="/about" exact component={AboutPage} />
          </Layout>
        </BrowserRouter>
      </ChakraProvider>
    </FirestoreProvider>
  );
};

export default App;
