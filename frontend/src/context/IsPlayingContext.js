import { createContext, useContext, useState } from 'react';

export const IsPlayingContext = createContext();

export const useIsPlaying = () => useContext(IsPlayingContext);

export default function IsPlayingProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <IsPlayingContext.Provider
    value={{
      isPlaying,
      setIsPlaying
    }}
    >
    {children}
    </IsPlayingContext.Provider>
  );
}