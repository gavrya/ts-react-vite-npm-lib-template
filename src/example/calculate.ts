import type { ReactElement } from 'react';

const calculate = () => {
  return 2 + 2;
};

export { calculate };

type TCalculate = ReturnType<typeof calculate>;

export type { TCalculate, ReactElement };
