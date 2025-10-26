import Image from 'next/image';
import type { ReactElement } from 'react';
import Fish from './Fishes/Fish';

const WaterBackGround = (): ReactElement => (
  <div
    className="bg-cover bg-center bg-no-repeat opacity-80 relative h-[calc(100vh-80px)]"
    style={{
      backgroundImage: 'url(/water.jpg)',
    }}
  >
    <Fish fishSpeed={3} fishWidth={260} />

    <div className="absolute bottom-40">
      <Image alt="fish-01" height={100} src="/fish-01.svg" width={100} />
    </div>
  </div>
);

export default WaterBackGround;
