import EventCardList from './event-card-list';
import { render } from '../../../test-utils';

describe('EventCardList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventCardList />);
    expect(baseElement).toBeTruthy();
  });
});
