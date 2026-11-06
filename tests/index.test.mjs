import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('factors one as empty', () => {
  assert.deepEqual(api.primeFactors(1), []);
});
test('factors a prime', () => {
  assert.deepEqual(api.primeFactors(97), [97]);
});
test('preserves multiplicity', () => {
  assert.deepEqual(api.primeFactors(360), [2, 2, 2, 3, 3, 5]);
});
test('returns ascending factors', () => {
  assert.deepEqual(api.primeFactors(77), [7, 11]);
});
test('handles square of large prime', () => {
  assert.deepEqual(api.primeFactors(999983 * 999983), [999983, 999983]);
});
test('rejects zero', () => {
  assert.throws(() => api.primeFactors(0), RangeError);
});
