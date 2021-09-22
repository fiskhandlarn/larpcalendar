import EventCard from './event-card';
import { render } from '../../../test-utils';

describe('EventCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventCard />);
    expect(baseElement).toBeTruthy();
  });
});
