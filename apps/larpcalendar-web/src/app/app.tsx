import { FunctionComponent, memo } from 'react';
import { AboutPage, EventsPage } from '@larpcalendar/pages';
import { Header, Layout } from '@larpcalendar/web-ui';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export const App: FunctionComponent = memo(() => {
  console.log('App');
  return (
    <BrowserRouter>
      <Layout>
        <Header title="Larp Calendar" />
        <Route path="/" exact component={EventsPage} />
        <Route path="/about" exact component={AboutPage} />
      </Layout>
    </BrowserRouter>
  );
});

export default App;
