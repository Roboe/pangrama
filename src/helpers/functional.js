export const compose = (...functions) => functions
  .reduceRight(
    (prevFn, currentFn) => value => currentFn(prevFn(value)),
    value => value
  );
