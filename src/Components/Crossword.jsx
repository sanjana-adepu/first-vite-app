import React,{useContext} from 'react'
import { ThemeContext } from '/src/Components/ThemeContext';

const Crossword = () => {
  const {imageUrls } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: `var(--bgcolor)` }}
    className="items-center justify-center min-h-screen max-md:mt-20 max-sm:mt-40 text-white">
      <img
          loading="lazy"
          src={imageUrls.crheading}
          alt="Sudoku Heading"
          className="self-center max-w-[260px] h-auto max-md:mt-10"
        /><br/>
      <img
          loading="lazy"
          src={imageUrls.crframe}
          className="grow shrink-0 max-w-[360px] aspect-square max-md:mt-10"
      />
    </div>
  )
}

export default Crossword
