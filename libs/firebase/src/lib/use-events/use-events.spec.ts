import { act, renderHook } from '@testing-library/react-hooks';
import useEvents from './use-events';

describe('useEvents', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useEvents());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
