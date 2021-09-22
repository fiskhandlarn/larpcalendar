import Meta from './meta';
import { render } from '../../../test-utils';

describe('Meta', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Meta />);
    expect(baseElement).toBeTruthy();
  });
});
