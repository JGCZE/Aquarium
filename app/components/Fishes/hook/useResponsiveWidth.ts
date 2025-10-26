'use client';
import { useEffect, useState } from 'react';

const useResponsiveWidth = () => {
  const [width, setWidth] = useState<number>(0);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    setIsInitialized(true);

    const handleResize = (): void => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isInitialized, width };
};

export default useResponsiveWidth;
