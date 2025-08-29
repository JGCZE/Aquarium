"use client"
import { useState, useEffect } from "react";

const useResponsiveWidth = () => {
  const [ width, setWidth ] = useState<number>(0);
  const [ isInitialized, setIsInitialized ] = useState<boolean>(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    setIsInitialized(true);

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width, isInitialized };
};

export default useResponsiveWidth;