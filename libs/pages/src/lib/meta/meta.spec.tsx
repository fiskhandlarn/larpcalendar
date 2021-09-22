import { render } from '../../../test-utils';

import Meta from './meta';

describe('Meta', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Meta />);
    expect(baseElement).toBeTruthy();
  });
});
