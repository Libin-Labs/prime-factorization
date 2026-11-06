export function primeFactors(value: number): number[] {
  if (!Number.isSafeInteger(value) || value < 1 || value > 1e12)
    throw new RangeError('Expected integer from 1 through 10^12');
  const factors: number[] = [];
  let n = value;
  for (let divisor = 2; divisor <= n / divisor; divisor += divisor === 2 ? 1 : 2)
    while (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    }
  if (n > 1) factors.push(n);
  return factors;
}
