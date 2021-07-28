import { useEffect, useRef, useState } from "react";
export const isFalsy = (value: unknown): boolean => (value === 0 ? false : !value);
export const isVoid = (value: unknown) => value === undefined || value === null || value === ''

export const cleanObject = (object: {[key: string]: unknown}) => {
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

export const useDocumentTitle = (title: string, keepOnUnMount: boolean = true) => {

  // const oldTitle = document.title
  const oldTitle = useRef(document.title).current

  useEffect(() => {
    document.title = title
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnMount) document.title = oldTitle
    }
  }, [keepOnUnMount, oldTitle])
}