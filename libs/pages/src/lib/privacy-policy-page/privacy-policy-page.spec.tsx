import PrivacyPolicyPage from './privacy-policy-page';
import { render } from '../../../test-utils';

describe('PrivacyPolicyPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PrivacyPolicyPage />);
    expect(baseElement).toBeTruthy();
  });
});
