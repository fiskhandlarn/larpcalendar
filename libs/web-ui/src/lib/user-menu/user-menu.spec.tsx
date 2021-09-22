import { render } from '../../../test-utils';
import UserMenu from './user-menu';

describe('UserMenu', () => {
  it('should render successfully', async () => {
    const { baseElement } = await render(<UserMenu />);
    expect(baseElement).toBeTruthy();
  });
});
