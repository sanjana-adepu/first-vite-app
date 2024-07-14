import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; 

const Theme = () => {
  const { changeTheme } = useContext(ThemeContext);
  
  const handleThemeChange = (themeName) => {
    changeTheme(themeName);
  };

  return (
    <div className='items-center justify-center min-h-screen text-3xl text-black mt-10 max-md:mt-20 max-sm:mt-40'>
      Select your theme here!
      <div className="flex flex-cols-2 gap-12 max-md:flex-cols-1 sm:flex-cols-1 ">
          <div className='space-y-2'>
          <img
            loading="lazy"
            src="/images/darkTheme/preview.png"
            className="grow shrink-0 max-w-[450px] max-md:mt-10"
          />
          <button 
          className= 'border-2 rounded'
          style={{
                backgroundColor: `var(--gridbg)`,
                borderColor: `var(--pdcolor)`,
                color: `var(--navbg)`,
              }}
              onClick={() => handleThemeChange('darkTheme')}>
            Dark Theme
          </button> <br/>
          </div>
          <div  className='space-y-2'>
          <img
            loading="lazy"
            src="/images/forestTheme/preview.png"
            className="grow shrink-0 max-w-[450px] max-md:mt-10"
          />
          <button 
          className='border-2 rounded'
          style={{
            backgroundColor: `var(--gridbg)`,
            borderColor: `var(--pdcolor)`,
            color: `var(--navbg)`,
          }}
          onClick={() => handleThemeChange('forestTheme')}>
            Forest Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Theme;
