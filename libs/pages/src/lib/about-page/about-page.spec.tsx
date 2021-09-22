import AboutPage from './about-page';
import { render } from '../../../test-utils';

describe('AboutPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AboutPage />);
    expect(baseElement).toBeTruthy();
  });
});
