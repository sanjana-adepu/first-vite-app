import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Sudoku from './Components/Sudoku/Sudoku';
import WordleI from './Components/WordleI';
import Crossword from './Components/Crossword';
import WordleII from './Components/WordleII';
import Theme from './Components/Theme'; 
import { ThemeContext, ThemeProvider } from './Components/ThemeContext'; 

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <div style={{ backgroundColor: `var(--bgcolor)`, fontFamily: `var(--textfont)`, }} className="flex flex-col items-center pb-20" >
            <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/sudoku" element={<Sudoku />} />
                <Route path="/wordle-i" element={<WordleI />} />
                <Route path="/crossword" element={<Crossword />} />
                <Route path="/wordle-ii" element={<WordleII />} />
                <Route path="/theme" element={<Theme />} />
              </Routes>
            </div>
          )}
        </ThemeContext.Consumer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
