import { FirebaseProvider } from '@larpcalendar/firebase';
import { render } from '../../test-utils';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  // it('should display the title', () => {
  //   const { getByText } = render(<App />);

  //   expect(getByText('Larp Calendar')).toBeTruthy();
  // });
});
