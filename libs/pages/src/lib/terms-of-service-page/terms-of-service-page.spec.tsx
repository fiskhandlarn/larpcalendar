import TermsOfServicePage from './terms-of-service-page';
import { render } from '../../../test-utils';

describe('TermsOfServicePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TermsOfServicePage />);
    expect(baseElement).toBeTruthy();
  });
});
