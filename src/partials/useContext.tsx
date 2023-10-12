import React, { createContext, useContext } from 'react';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const color = createContext(themes.light);

const ThemeButton = () => {
  const theme = useContext(color);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

const Toolbar = () => {
  return (
    <div>
      <ThemeButton />
    </div>
  );
};

const UseContext = () => {
  return (
    <color.Provider value={themes.dark}>
      <Toolbar />
    </color.Provider>
  )
};

export default UseContext
