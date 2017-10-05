/* eslint-disable no-param-reassign */
let primeFactors = (number) => {
  let factors = [];
  
  for (let divisor = 2; number > 1; divisor++) {
    for ( ; number % divisor === 0; number /= divisor) {
      factors.push(divisor);
    }
  }
  
  return factors;
};

export {primeFactors};
