import { render } from '../../../test-utils';

import AlertBox from './alert-box';

describe('Alert', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AlertBox />);
    expect(baseElement).toBeTruthy();
  });
});
