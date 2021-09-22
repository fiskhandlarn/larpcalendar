import Body from './body';
import { render } from '../../../test-utils';

describe('Body', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Body />);
    expect(baseElement).toBeTruthy();
  });
});
