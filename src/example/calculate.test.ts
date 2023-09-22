import { describe, it, expect } from 'vitest';
import { calculate } from './calculate';

describe('Index', () => {
  it('should test calculate()', () => {
    expect(calculate()).toBe(4);
  });
});
