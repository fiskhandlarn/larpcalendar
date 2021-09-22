import LoginForm from './login-form';
import { render } from '../../../test-utils';

describe('LoginForm', () => {
  it('should render successfully', () => {
    const onSubmit = jest.fn();
    const { baseElement } = render(
      <LoginForm onSubmit={onSubmit} loading={false} />
    );
    expect(baseElement).toBeTruthy();
  });
});
