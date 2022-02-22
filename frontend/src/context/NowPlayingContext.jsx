import {
  React,
  createContext,
  useContext,
  useState,
  useMemo,
} from 'react';

export const NowPlayingContext = createContext();

export const useNowPlaying = () => useContext(NowPlayingContext);

export default function NowPlayingProvider({ children }) {
  const [nowPlaying, setNowPlaying] = useState('');
  const value = useMemo(
    () => ({ nowPlaying, setNowPlaying }),
    [nowPlaying],
  );

  return (
    <NowPlayingContext.Provider
      value={value}
    >
      {children}
    </NowPlayingContext.Provider>
  );
}
