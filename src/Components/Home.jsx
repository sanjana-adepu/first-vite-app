import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '/src/Components/ThemeContext';



export const Home = () => {
    const { theme,imageUrls } = useContext(ThemeContext);

  return (
    <div className="flex flex-col items-center pb-20" style={{ backgroundColor: 'var(--bgcolor)', fontFamily: 'var(--textfont)' }}> 
            <div className="mt-16 text-5xl text-center max-md:mt-20 max-sm:mt-40 max-md:max-w-full max-md:text-4xl"  style={{ color: 'var(--hometext)' }}>
            Play with numbers and letters !
            </div>
            <div className="px-5 mt-20 w-full max-w-[1579px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col gap-10 w-[300px] max-md:ml-0 max-md:w-full">
                <img
                    
                    src={imageUrls.suframe}
                    className="grow shrink-0 max-w-full aspect-square max-md:mt-10"
                />
                <div className="flex flex-col grow items-center px-5 text-center max-md:mt-10">
                    <div className="text-5xl" style={{ color: 'var(--hometext)' }}>
                    SUDOKU
                    </div>
                    <div className="self-stretch mt-7 text-3xl" style={{ color: 'var(--pdcolor)' }}>
                    A game of logic that involves filling in a nine by nine grid
                    with numbers from 1 to 9.
                    </div>
                    <div>
                    <Link to="/sudoku">
                    <img
                    
                    src={imageUrls.homePlay}
                    className="mt-10 max-w-full aspect-[2] w-[100px]"
                    />
                    </Link>
                    </div>
                </div>
                </div>
                <div className="flex flex-col gap-10 w-[300px] max-md:ml-0 max-md:w-full">
                <img
                    
                    src={imageUrls.w1frame}
                    className="grow shrink-0 max-w-full aspect-square max-md:mt-10"
                />
                <div className="flex flex-col grow items-center px-5 text-center max-md:mt-10">
                <div className="text-5xl" style={{ color: 'var(--hometext)' }}>
                    WORDLE
                    </div>
                    <div className="self-stretch mt-7 text-3xl" style={{ color: 'var(--pdcolor)' }}>
                    A simple yet addictive four-letter word guessing game.
                    </div>
                    <div>
                    <Link to="/wordle-i">
                    <img
                    
                    src={imageUrls.homePlay}
                    className="mt-10 max-w-full aspect-[2] w-[100px]"
                    />
                    </Link>
                    </div>
                </div>
                </div>
                <div className="flex flex-col gap-10 w-[300px] max-md:ml-0 max-md:w-full">
                <img
                    
                    src={imageUrls.crframe}
                    className="grow shrink-0 max-w-full aspect-square max-md:mt-10"
                />
                <div className="flex flex-col grow items-center px-5 text-center max-md:mt-10">
                <div className="text-5xl" style={{ color: 'var(--hometext)' }}>
                    CROSSWORD
                    </div>
                    <div className="self-stretch mt-7 text-3xl" style={{ color: 'var(--pdcolor)' }}>
                    A simple yet addictive four-letter word guessing game.
                    </div>
                    <div>
                    <Link to="/crossword">
                    <img
                    
                    src={imageUrls.homePlay}
                    className="mt-10 max-w-full aspect-[2] w-[100px]"
                    />
                    </Link>
                    </div>
                </div>
                </div>
                <div className="flex flex-col gap-10 w-[300px] max-md:ml-0 max-md:w-full">
                <img
                    
                    src={imageUrls.w2frame}
                    className="grow shrink-0 max-w-full aspect-square max-md:mt-10"
                />
                <div className="flex flex-col grow items-center px-5 text-center max-md:mt-10">
                <div className="text-5xl" style={{ color: 'var(--hometext)' }}>
                    WORDLE-II
                    </div>
                    <div className="self-stretch mt-7 text-3xl" style={{ color: 'var(--pdcolor)' }}>
                    A simple yet addictive four-letter word guessing game.
                    </div>
                    <div>
                    <Link to="/wordle-ii">
                    <img
                    
                    src={imageUrls.homePlay}
                    className="mt-10 max-w-full aspect-[2] w-[100px]"
                    />
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="mt-14 w-full max-w-[1577px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            </div>
            </div>
        </div>
  );
}

export default Home;
        