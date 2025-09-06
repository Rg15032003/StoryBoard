
import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const { navigate, token } = useAppContext()
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 30); // Trigger effect after 20px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/30' 
        : 'bg-transparent'
    }`}>
      <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
        <img 
          onClick={() => navigate('/')} 
          src={assets.logo} 
          alt="logo" 
          className={`cursor-pointer transition-all duration-300 ${
            isScrolled ? 'w-28 sm:w-36' : 'w-32 sm:w-44'
          }`} 
        />
        
        <button 
          onClick={() => navigate('/admin')} 
          className={`flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white transition-all duration-300 hover:scale-105 hover:shadow-lg ${
            isScrolled ? 'px-8 py-2' : 'px-10 py-2.5'
          }`}
        >
          {token ? "Dashboard" : "Login"}
          <img src={assets.arrow} className='w-3' alt="arrow" />
        </button>
      </div>
    </div>
  )
}

export default Navbar