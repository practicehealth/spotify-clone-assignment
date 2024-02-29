import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward, IoMdArrowRoundForward } from "react-icons/io";
import { FaSearch, FaForward } from 'react-icons/fa';
import MyContext from '../context/MyContext';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location.pathname);
  const { searchBox, setSearchBox, result, setResult } = useContext(MyContext);

  useEffect(() => {
    if (location.pathname === '/search' || location.pathname === '/result') {
      setSearchBox(true);
    }
    else {
      setSearchBox(false);
    }
  }, [location.pathname]);

  const handleChange = (value) => {
    if (value !== null && value.length <= 30) {
      setResult(value);
    }
  }


  return (
    <div className='bg-neutral-950 text-2xl p-4 opacity-95 flex gap-2 justify-between items-center'>

      <div className='flex gap-4'>
        <IoIosArrowBack onClick={() => window.history.back()} />
        <IoIosArrowForward onClick={() => window.history.forward()} />
      </div>

      {
        searchBox && (
          <div className="flex items-center px-3 gap-2 bg-neutral-900 hover:border-gray-300 border border-gray-500 rounded-full">
            <FaSearch />
            <input
              type="text"
              className="bg-neutral-900 px-2 py-2 text-lg border-none rounded-full focus:outline-none focus:border-transparent hover:border-transparent hover:cursor-pointer"
              onChange={ (e) => handleChange(e.target.value)}
            />
            <div
              className='w-1/5 h-full justify-center items-center'
              onClick={ ()=> navigate('/result') }
            >
              <IoMdArrowRoundForward />
            </div>

          </div>
        )
      }

      <div className='flex gap-6 text-sm font-bold'>
        <button className='text-gray-300 hover:text-gray-100'>Sign up </button>
        <button className='h-10 w-28 bg-white text-gray-950 rounded-full hover:scale-105 duration-100'>
          Log in
        </button>
      </div>

    </div>
  )
}

export default Header