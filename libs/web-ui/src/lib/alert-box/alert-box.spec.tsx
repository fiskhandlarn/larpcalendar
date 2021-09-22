import AlertBox from './alert-box';
import { render } from '../../../test-utils';

describe('Alert', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AlertBox />);
    expect(baseElement).toBeTruthy();
  });
});
