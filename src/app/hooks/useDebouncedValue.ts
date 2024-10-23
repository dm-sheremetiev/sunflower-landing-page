'use client';

import { useEffect, useState } from 'react';

export const useDebouncedValue = <T = unknown>(value: T, delay = 600) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(value), delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounced;
};
