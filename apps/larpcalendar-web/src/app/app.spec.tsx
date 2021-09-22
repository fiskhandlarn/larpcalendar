import App from './app';
import { render } from '../../test-utils';

const useUser = jest.fn();

describe('App', () => {
  it('should render successfully', async () => {
    useUser.mockReturnValue({ status: 'loading', user: null });
    const { baseElement } = await render(<App />);
    expect(baseElement).toBeTruthy();
  });
});
