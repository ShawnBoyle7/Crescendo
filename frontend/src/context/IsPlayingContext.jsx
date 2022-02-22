import {
  React,
  createContext,
  useContext,
  useState,
  useMemo,
} from 'react';

export const IsPlayingContext = createContext();

export const useIsPlaying = () => useContext(IsPlayingContext);

export default function IsPlayingProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const value = useMemo(
    () => ({ isPlaying, setIsPlaying }),
    [isPlaying],
  );

  return (
    <IsPlayingContext.Provider
      value={value}
    >
      {children}
    </IsPlayingContext.Provider>
  );
}
