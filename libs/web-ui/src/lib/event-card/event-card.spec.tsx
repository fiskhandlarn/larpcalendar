import { render } from '../../../test-utils';

import EventCard from './event-card';

describe('EventCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventCard />);
    expect(baseElement).toBeTruthy();
  });
});
