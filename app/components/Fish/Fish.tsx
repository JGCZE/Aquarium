'use client';
import clsx from 'clsx';
import Image from 'next/image';
import type { ReactElement } from 'react';
import useFish, { type TFishSpeed } from './hook/useFish';

interface IFishProps {
  readonly fishSpeed: TFishSpeed;
  readonly fishWidth: number;
}

const Fish = ({ fishSpeed, fishWidth }: IFishProps): ReactElement => {
  const { coordLeft, coordTop, isFlipped } = useFish(fishWidth, fishSpeed);

  return (
    <div
      className={clsx('absolute', isFlipped && 'rotate-y-180')}
      style={{
        left: `${coordLeft}px`,
        top: `${coordTop}px`,
      }}
    >
      <Image alt="fish-01" height={fishWidth} src="/fish-01.svg" width={fishWidth} priority />
    </div>
  );
};

export default Fish;
