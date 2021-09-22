import { render } from '../../../test-utils';

import PrivacyPolicyPage from './privacy-policy-page';

describe('PrivacyPolicyPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PrivacyPolicyPage />);
    expect(baseElement).toBeTruthy();
  });
});
