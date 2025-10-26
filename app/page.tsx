'use client';
import type { ReactElement } from 'react';
import TopPannel from './components/TopPannel';
import WaterBackGround from './components/WaterBackGround';

const App = (): ReactElement => (
  <div className="min-h-screen">
    <TopPannel />

    <WaterBackGround />
  </div>
);

export default App;
