import Footer from './footer';
import { render } from '../../../test-utils';

describe('Footer', () => {
  it('should render successfully', async () => {
    const { baseElement } = await render(<Footer />);
    expect(baseElement).toBeTruthy();
  });
});
