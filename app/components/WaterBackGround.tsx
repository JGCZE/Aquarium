import type { ReactElement, ReactNode } from 'react';

interface IProps {
  readonly children: ReactNode;
}

const WaterBackGround = ({ children }: IProps): ReactElement => (
  <div
    className="bg-cover bg-center bg-no-repeat opacity-80 relative h-[calc(100vh-80px)]"
    style={{
      backgroundImage: 'url(/water.jpg)',
    }}
  >
    {children}
  </div>
);

export default WaterBackGround;
