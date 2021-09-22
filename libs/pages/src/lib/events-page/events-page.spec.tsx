import EventsPage from './events-page';
import { render } from '../../../test-utils';

describe('EventsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventsPage />);
    expect(baseElement).toBeTruthy();
  });
});
