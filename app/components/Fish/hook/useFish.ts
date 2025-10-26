import { useEffect, useMemo, useState } from 'react';
import useResponsiveWidth from './useResponsiveWidth';

interface IReturn {
  coordLeft: number;
  coordTop: number;
  isFlipped: boolean;
}

const RANDOM_TURN_BASE = 1000;
const RANDOM_TURN_VARIANCE = 7000;

export type TFishSpeed = 3 | 5 | 10 | 14 | 18 | 25;

const useFish = (fishWidth: number, speed: TFishSpeed): IReturn => {
  const [coordLeft, setCoordLeft] = useState<number>(0);
  const [coordTop, setCoordTop] = useState<number>(10);
  const [isXDirectionRight, setIsXDirectionRight] = useState<boolean>(true);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const { width } = useResponsiveWidth();

  const randomTurnTime = useMemo(
    () => RANDOM_TURN_BASE + Math.random() * RANDOM_TURN_VARIANCE,
    [isFlipped],
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (coordLeft >= 0 && (coordLeft + fishWidth < width) && isXDirectionRight) {
        setCoordLeft((prev) => prev + 1);
      }

      if (coordLeft > 0 && !isXDirectionRight) {
        setCoordLeft((prev) => prev - 1);
      }
    }, speed);

    return (): void => {
      clearInterval(intervalId);
    };
  }, [coordLeft, fishWidth, isXDirectionRight, speed, width]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsFlipped((flip) => !flip);
      setIsXDirectionRight((dir) => !dir);
    }, randomTurnTime);

    return (): void => {
      clearTimeout(timeoutId);
    };
  }, [randomTurnTime, isFlipped]);

  useEffect(() => {
    if (coordLeft === 0 || (coordLeft + fishWidth === width)) {
      setIsFlipped((prev) => !prev);
      setIsXDirectionRight((dir) => !dir);
    }
  }, [coordLeft, fishWidth, width]);

  return {
    coordLeft,
    coordTop,
    isFlipped,
  };
};

export default useFish;
