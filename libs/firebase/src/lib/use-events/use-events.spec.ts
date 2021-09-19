import { renderHook } from '@testing-library/react-hooks';
import { FirebaseProvider } from '../firebase-provider/firebase-provider';
import useEvents from './use-events';

describe('useEvents', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useEvents(), {
      wrapper: FirebaseProvider,
    });
    expect(result.current.status).toBe('loading');
  });
});
