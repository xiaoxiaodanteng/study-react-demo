import { useEffect, useRef, useState } from 'react';

export const isFalsy = (value: unknown): boolean => (value === 0 ? false : !value);
export const isVoid = (value: unknown): boolean => value === undefined || value === null || value === '';

export const cleanObject = (object: {[key: string]: unknown}): {[key: string]: unknown} => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });

  return result;
};

export const useMount = (callback: () => void): void => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

export const useDocumentTitle = (title: string, keepOnUnMount = true): void => {
  // const oldTitle = document.title
  const oldTitle = useRef(document.title).current;

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => () => {
    if (!keepOnUnMount) document.title = oldTitle;
  }, [keepOnUnMount, oldTitle]);
};


/**
 * 用于返回组件的挂载状态，如果还没挂载或者已经卸载，返回false, 反之，返回true
 * */
export const useMountedRef = () => {
  const mountedRef = useRef(false)

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  })

  return mountedRef
}