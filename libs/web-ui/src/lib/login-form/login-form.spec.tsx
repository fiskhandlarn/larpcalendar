import { render } from '../../../test-utils';

import LoginForm from './login-form';

describe('LoginForm', () => {
  it('should render successfully', () => {
    const onSubmit = jest.fn();
    const { baseElement } = render(<LoginForm onSubmit={onSubmit} />);
    expect(baseElement).toBeTruthy();
  });
});
