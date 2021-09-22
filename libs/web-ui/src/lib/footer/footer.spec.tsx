import { render } from '../../../test-utils';

import Footer from './footer';

describe('Footer', () => {
  it('should render successfully', async () => {
    const { baseElement } = await render(<Footer />);
    expect(baseElement).toBeTruthy();
  });
});
