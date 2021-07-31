import { useState, useMemo } from 'react';
import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';
import { cleanObject } from 'utils';

export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [stateKeys] = useState(keys);
  return [
    useMemo(
      () => stateKeys.reduce((prev, key) => ({ ...prev, [key]: searchParams.get(key) || '' }), {} as {[key in K]: string}),
      [searchParams, stateKeys],
    ),
    (params: Partial<{[key in K]: unknown}>) => {
      const o = cleanObject({ ...Object.fromEntries(searchParams), ...params }) as URLSearchParamsInit;
      return setSearchParams(o);
    },
  ] as const;
};
