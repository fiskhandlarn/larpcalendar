import ColorModeToggle from './color-mode-toggle';
import { render } from '../../../test-utils';

describe('ColorModeToggle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ColorModeToggle />);
    expect(baseElement).toBeTruthy();
  });
});
