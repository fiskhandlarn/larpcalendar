import { FunctionComponent } from 'react';
import { getFirestore } from '@firebase/firestore';
import { useFirebaseApp, FirestoreProvider } from 'reactfire';
import { Events } from '@larpcalendar/firebase';
import { Header, Layout } from '@larpcalendar/web-ui';
import { ChakraProvider } from '@chakra-ui/react';
export const App: FunctionComponent = () => {
  const firestore = getFirestore(useFirebaseApp());

  return (
    <FirestoreProvider sdk={firestore}>
      <ChakraProvider>
        <Layout>
          <Header title="Larp Calendar" />
          <Events />
        </Layout>
      </ChakraProvider>
    </FirestoreProvider>
  );
};

export default App;
