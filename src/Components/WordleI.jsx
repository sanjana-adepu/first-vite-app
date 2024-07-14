import React,{useContext} from 'react'
import { ThemeContext } from '/src/Components/ThemeContext';

const WordleI = () => {
  const {imageUrls } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: `var(--bgcolor)` }}
    className="items-center justify-center min-h-screen max-md:mt-20 max-sm:mt-40 text-white">
      <img
          
          src={imageUrls.w1heading}
          alt="Sudoku Heading"
          className="self-center max-w-[260px] h-auto"
        /><br/>
      <img
          
          src={imageUrls.w1frame}
          className="grow shrink-0 max-w-[360px] aspect-square max-md:mt-10"
      />
    </div>
  )
}

export default WordleI
