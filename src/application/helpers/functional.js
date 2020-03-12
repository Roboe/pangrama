const applyFunc = (f, g) => (value) => g(f(value))

export const compose = (...functions) => functions.reduceRight(applyFunc);
