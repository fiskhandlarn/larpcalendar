import { render } from '@testing-library/react';

import FirebaseProvider from './firebase-provider';

describe('FirebaseProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FirebaseProvider />);
    expect(baseElement).toBeTruthy();
  });
});
