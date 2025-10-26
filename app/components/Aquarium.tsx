import Image from 'next/image';
import type { ReactElement } from 'react';
import { Fish } from './Fish';
import WaterBackGround from './WaterBackGround';
import { useAquariumGlobalContext } from '../context/globalContext';

const Aquarium = (): ReactElement => {
  const context = useAquariumGlobalContext();

  console.log(">>", context);

  return (
    <WaterBackGround>

      <Fish fishSpeed={3} fishWidth={260} />

      <div className="absolute bottom-40">
        <Image alt="fish-01" height={100} src="/fish-01.svg" width={100} />
      </div>

    </WaterBackGround>
  );
};

export default Aquarium;
