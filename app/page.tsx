'use client';
import type { ReactElement } from 'react';
import { Aquarium, TopPannel } from './components';
import { AquariumGlobalProvider } from './context/globalContext';

const App = (): ReactElement => (
  <div className="min-h-screen">
    <AquariumGlobalProvider>
      <TopPannel />

      <Aquarium />
    </AquariumGlobalProvider>
  </div>
);

export default App;
