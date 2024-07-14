import React, { useState, useEffect,useContext } from 'react';

import { ThemeContext } from '/src/Components/ThemeContext';


const Sudoku = () => {
  const {imageUrls } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: `var(--bgcolor)` }}
    className="items-center justify-center min-h-screen text-white max-md:mt-20 max-sm:mt-40">
      <div className="text-3xl text-center max-md:mt-10">
        <img
          loading="lazy"
          src={imageUrls.suheading}
          alt="Sudoku Heading"
          className="self-center max-w-[260px] h-auto"
        />
      </div>
      <div className="flex flex-col space-x-8 md:flex-row md:gap-0">
        <div className="flex-1 mt-6">
        <img
          loading="lazy"
          src={imageUrls.suframe}
          className="grow shrink-0 max-w-[360px] aspect-square max-md:mt-10"
        />
        </div>
        <div className="flex-2 mt-8 text-3xl">
          <div className="grid grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <button
              key={num}
              style={{
                backgroundColor: `var(--gridbg)`,
                borderColor: `var(--pdcolor)`,
                color: `var(--pdcolor)`,
              }}
              className="w-12 h-12 border-2 rounded"
              >
                {num}
              </button>
            ))}
          </div>
          <div className="mt-4 justify-center items-center">
            <button
              style={{
                backgroundColor: `var(--gridbg)`,
                borderColor: `var(--pdcolor)`,
                color: `var(--pdcolor)`,
              }}
              className="w-60 h-12 border-2 rounded"
            >
              Reset
            </button>
          </div>
          <div className="mt-4 justify-center items-center">
            <button
              style={{
                backgroundColor: `var(--gridbg)`,
                borderColor: `var(--pdcolor)`,
                color: `var(--pdcolor)`,
              }}
              className="w-60 h-12 border-2 rounded"
            >
              New Puzzle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sudoku;
