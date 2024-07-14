import React, { createContext, useState, useEffect } from 'react';

const themes = {
  darkTheme: 'darkTheme',
  forestTheme: 'forestTheme',
};

const initialTheme = themes.darkTheme; // Default theme

const imageUrls = {
  darkTheme: {
    heading: '/first-vite-app/images/darkTheme/websiteHead.png',
    logo: '/first-vite-app/images/darkTheme/Logo.png',
    homePlay: '/first-vite-app/images/darkTheme/homePlay.png',
    suheading: '/first-vite-app/images/darkTheme/sudoku/heading.png',
    suframe: '/first-vite-app/images/darkTheme/sudoku/frame.png',
    w1heading: '/first-vite-app/images/darkTheme/wordle1/heading.png',
    w1frame: '/first-vite-app/images/darkTheme/wordle1/frame.png',
    crheading: '/first-vite-app/images/darkTheme/crossword/heading.png',
    crframe: '/first-vite-app/images/darkTheme/crossword/frame.png',
    w2heading: '/first-vite-app/images/darkTheme/wordle2/heading.png',
    w2frame: '/first-vite-app/images/darkTheme/wordle2/frame.png',
  },
  forestTheme: {
    heading: '/first-vite-app/images/forestTheme/heading.png',
    logo: '/first-vite-app/images/forestTheme/Logo.png',
    homePlay: '/first-vite-app/images/forestTheme/homePlay.png',
    suheading: '/first-vite-app/images/forestTheme/sudoku/heading.png',
    suframe: '/first-vite-app/images/forestTheme/sudoku/frame.png',
    w1heading: '/first-vite-app/images/forestTheme/wordle1/heading.png',
    w1frame: '/first-vite-app/images/forestTheme/wordle1/frame.png',
    crheading: '/first-vite-app/images/forestTheme/crossword/heading.png',
    crframe: '/first-vite-app/images/forestTheme/crossword/frame.png',
    w2heading: '/first-vite-app/images/forestTheme/wordle2/heading.png',
    w2frame: '/first-vite-app/images/forestTheme/wordle2/frame.png',
  },
};

export const ThemeContext = createContext({
  theme: initialTheme,
  changeTheme: () => {},
  imageUrls: imageUrls[initialTheme], // Initial image URLs based on default theme
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, imageUrls: imageUrls[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};
