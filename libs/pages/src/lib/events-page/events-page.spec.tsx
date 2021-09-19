import { render } from '../../../test-utils';

import EventsPage from './events-page';

describe('EventsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventsPage />);
    expect(baseElement).toBeTruthy();
  });
});
