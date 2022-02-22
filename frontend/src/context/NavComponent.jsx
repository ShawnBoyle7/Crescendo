/* eslint-disable react/jsx-no-useless-fragment */

import {
  React,
  createContext,
  useContext,
  useState,
  useMemo,
} from 'react';

export const NavComponentContex = createContext();

export const useNavComponent = () => useContext(NavComponentContex);

export default function NavComponentProvider({ children }) {
  const [navComponent, setNavComponent] = useState(<></>);
  const value = useMemo(
    () => ({ navComponent, setNavComponent }),
    [navComponent],
  );

  return (
    <NavComponentContex.Provider
      value={value}
    >
      {children}
    </NavComponentContex.Provider>
  );
}
