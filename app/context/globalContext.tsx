import { createContext, type ReactNode, useContext } from 'react';

interface IAquariumContext {
  test: string;
}

const AquariumGlobalContext = createContext<IAquariumContext | null>(null);

interface IProviderProps {
  readonly children: ReactNode;
}

export const AquariumGlobalProvider = ({ children }: IProviderProps) => {
  const test = 'provider';

  return (
    <AquariumGlobalContext value={test}>
      {children}
    </AquariumGlobalContext>
  );
};

export const useAquariumGlobalContext = () => {
  const context = useContext(AquariumGlobalContext);

  if (!context) {
    throw new Error('useAquariumGlobalContext must be used within AquariumGlobalProvider');
  }

  return context;
};
