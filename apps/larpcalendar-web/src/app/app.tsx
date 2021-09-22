import { FunctionComponent, memo } from 'react';
import {
  AuthPage,
  AboutPage,
  EventsPage,
  TermsOfServicePage,
  PrivacyPolicyPage,
} from '@larpcalendar/pages';
import { Layout, theme } from '@larpcalendar/web-ui';
import { BrowserRouter, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

export const App: FunctionComponent = memo(() => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Route path="/" exact component={EventsPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/auth" exact component={AuthPage} />
          <Route
            path="/terms-of-service"
            exact
            component={TermsOfServicePage}
          />
          <Route path="/privacy-policy" exact component={PrivacyPolicyPage} />
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  );
});

export default App;
