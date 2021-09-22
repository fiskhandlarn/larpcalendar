import UserMenu from './user-menu';
import { render } from '../../../test-utils';

describe('UserMenu', () => {
  it('should render successfully', async () => {
    const { baseElement } = await render(<UserMenu />);
    expect(baseElement).toBeTruthy();
  });
});
