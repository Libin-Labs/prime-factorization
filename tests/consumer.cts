import * as api from '@lp-labs/prime-factorization';
import { primeFactors } from '@lp-labs/prime-factorization';
console.log(primeFactors(360));
// @ts-expect-error invalid argument must be rejected by declarations
api.primeFactors('360');
