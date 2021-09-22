import { render } from '../../../test-utils';

import Body from './body';

describe('Body', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Body />);
    expect(baseElement).toBeTruthy();
  });
});
