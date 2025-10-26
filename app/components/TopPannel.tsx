import type { ReactElement } from 'react';
import { Button } from './ui/button';

const TopPannel = (): ReactElement => (
  <div className="h-20 flex justify-center items-center gap-20">
    TopPannel

    <Button>
      Přidej rybu
    </Button>
  </div>
);

export default TopPannel;
