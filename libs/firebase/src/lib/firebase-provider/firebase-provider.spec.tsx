import FirebaseProvider from './firebase-provider';
import { render } from '@testing-library/react';

describe('FirebaseProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FirebaseProvider />);
    expect(baseElement).toBeTruthy();
  });
});
