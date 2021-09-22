import { render } from '../../../test-utils';

import Layout from './layout';

describe('Layout', () => {
  it('should render successfully', async () => {
    const { baseElement } = await render(<Layout />);
    expect(baseElement).toBeTruthy();
  });
});
