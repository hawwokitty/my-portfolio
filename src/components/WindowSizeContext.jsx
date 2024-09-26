import React, {useContext, createContext} from "react";

const WindowSizeContext = createContext();

export function useWindowSize() {
  return useContext(WindowSizeContext)
}

export default function WindowSizeProvider({ children }) {
  const windowHeight = window.innerHeight;
  let windowSmall = true;
  if (windowHeight > 680) {
    windowSmall = false;
  }

  return (
    <WindowSizeContext.Provider value={windowSmall}>
      {children}
    </WindowSizeContext.Provider>
  );
}
