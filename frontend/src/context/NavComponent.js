import { createContext, useContext, useState } from 'react';

export const NavComponentContex = createContext();

export const useNavComponent = () => useContext(NavComponentContex);

export default function NavComponentProvider({ children }) {
  const [navComponent, setNavComponent] = useState(<></>)

  return (
    <NavComponentContex.Provider
    value={{
      navComponent,
      setNavComponent
    }}
    >
    {children}
    </NavComponentContex.Provider>
  );
}