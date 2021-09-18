import { render } from '@testing-library/react';

import EventsPage from './events-page';

describe('EventsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventsPage />);
    expect(baseElement).toBeTruthy();
  });
});
