import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative bg-black text-white'>
      <div className='text-center mt-20 mb-8'>

        {/* Highlight Badge */}
        <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/20 rounded-full text-sm text-primary'>
          <p>New : AI feature integrated</p>
          <img src={assets.star_icon} className='w-2.5' alt="" />
        </div>

        {/* Main Heading */}
        <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-white'>
          Your own <span className='text-primary'>blogging</span> <br /> platform.
        </h1>

        {/* Subheading */}
        <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-300'>
          This is your space to think out loud, to share what matters, and to write without filters.
          Whether it's one word or a thousand, your story starts right here.
        </p>

        {/* Optional search bar (commented out) 
        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-600 bg-gray-900 rounded overflow-hidden'>
          <input ref={inputRef} type="text" placeholder='Search for blogs' required className='w-full pl-4 outline-none bg-transparent text-white placeholder-gray-400'/>
          <button type="submit" className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>Search</button>
        </form>
        */}
      </div>

      <div className='text-center'>
        {/* { input && <button onClick={onClear} className='border border-gray-600 font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer text-white'>Clear Search</button>} */}
      </div>

      {/* Background Gradient */}
      {/* <img src={assets.gradientBackground} alt='' className='absolute -top-50 -z-1 opacity-20' /> */}
    </div>
  );
};

export default Header;
