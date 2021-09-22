import Layout from './layout';
import { render } from '../../../test-utils';

describe('Layout', () => {
  it('should render successfully', async () => {
    const { baseElement } = await render(<Layout />);
    expect(baseElement).toBeTruthy();
  });
});
