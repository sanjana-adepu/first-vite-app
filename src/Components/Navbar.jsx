import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

export const Navbar = () => {
  const { theme, imageUrls } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: `var(--navbg)` }}
      className="flex gap-5 justify-between self-stretch px-16 py-4 w-full h-[100px] max-md:flex-wrap max-md:px-5 max-md:max-w-full"
    >
        <div className="flex gap-5">
          <img
            loading="lazy"
            src={imageUrls.logo}
            className="shrink-0 self-start aspect-[1.01] w-[70px]"
            alt="First Image"
          />
          <img
            loading="lazy"
            src={imageUrls.heading}
            className="grow shrink-0 aspect-[3.33] basis-0 w-[228.36] h-[68px]"
            alt="Second Image"
          />
        </div>
        <div
        style={{ color: `var(--hometext)` }}
        className="flex gap-6 self-end mt-10 text-2xl text-center whitespace-nowrap max-md:flex-wrap max-md:max-w-full">        <div className="my-auto"><Link to="/home">Home</Link></div>
        <div className="flex-auto"><Link to="/sudoku">Sudoku</Link></div>
        <div className="flex-auto"><Link to="/wordle-i">Wordle-I</Link></div>
        <div className="flex-auto"><Link to="/crossword">Crossword</Link></div>
        <div className="flex-auto"><Link to="/wordle-ii">Wordle-II</Link></div>
        <div className="flex-auto"><Link to="/theme">Theme</Link></div>
      </div>
      </div>
  );
};

export default Navbar;