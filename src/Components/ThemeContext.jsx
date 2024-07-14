import React, { createContext, useState, useEffect } from 'react';

const themes = {
  darkTheme: 'darkTheme',
  forestTheme: 'forestTheme',
};

const initialTheme = themes.darkTheme; // Default theme

const imageUrls = {
  darkTheme: {
    heading: '/images/darkTheme/websiteHead.png',
    logo: '/images/darkTheme/Logo.png',
    homePlay: '/images/darkTheme/homePlay.png',
    suheading: '/images/darkTheme/sudoku/heading.png',
    suframe: '/images/darkTheme/sudoku/frame.png',
    w1heading: '/images/darkTheme/wordle1/heading.png',
    w1frame: '/images/darkTheme/wordle1/frame.png',
    crheading: '/images/darkTheme/crossword/heading.png',
    crframe: '/images/darkTheme/crossword/frame.png',
    w2heading: '/images/darkTheme/wordle2/heading.png',
    w2frame: '/images/darkTheme/wordle2/frame.png',
  },
  forestTheme: {
    heading: '/images/forestTheme/heading.png',
    logo: '/images/forestTheme/Logo.png',
    homePlay: '/images/forestTheme/homePlay.png',
    suheading: '/images/forestTheme/sudoku/heading.png',
    suframe: '/images/forestTheme/sudoku/frame.png',
    w1heading: '/images/forestTheme/wordle1/heading.png',
    w1frame: '/images/forestTheme/wordle1/frame.png',
    crheading: '/images/forestTheme/crossword/heading.png',
    crframe: '/images/forestTheme/crossword/frame.png',
    w2heading: '/images/forestTheme/wordle2/heading.png',
    w2frame: '/images/forestTheme/wordle2/frame.png',
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
