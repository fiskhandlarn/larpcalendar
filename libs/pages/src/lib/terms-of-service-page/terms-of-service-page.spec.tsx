import { render } from '../../../test-utils';

import TermsOfServicePage from './terms-of-service-page';

describe('TermsOfServicePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TermsOfServicePage />);
    expect(baseElement).toBeTruthy();
  });
});
