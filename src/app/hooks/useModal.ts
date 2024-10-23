'use client';

import { useCallback, useState } from 'react';

export const useModal = (initialValue = false): [boolean, () => void, () => void] => {
  const [isVisible, setIsVisible] = useState(initialValue);

  const showModal = useCallback(() => setIsVisible(true), []);
  const hideModal = useCallback(() => setIsVisible(false), []);

  return [isVisible, showModal, hideModal];
};
