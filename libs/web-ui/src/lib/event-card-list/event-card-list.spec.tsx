import { render } from '../../../test-utils';

import EventCardList from './event-card-list';

describe('EventCardList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventCardList />);
    expect(baseElement).toBeTruthy();
  });
});
