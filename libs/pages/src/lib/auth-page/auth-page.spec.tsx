import AuthPage from './auth-page';
import { render } from '../../../test-utils';

describe('AuthPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthPage />);
    expect(baseElement).toBeTruthy();
  });
});
