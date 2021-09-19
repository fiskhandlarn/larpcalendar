import { render } from '../../../test-utils';

import AboutPage from './about-page';

describe('AboutPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AboutPage />);
    expect(baseElement).toBeTruthy();
  });
});
