import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import LoginSign from './LoginSign';
import SearchInput from './SearchInput';

const Nav = ({ showSearchInput }) => {
  return (
    <div className='w-full px-1 h-[64px] sticky top-0 z-20'>
      <div className='p-2 bg-[#1a191980] flex justify-between rounded-t-xl items-center backdrop-filter backdrop-brightness-0'>
        <div className='flex justify-around w-96 items-center'>
        <div className='flex w-24 gap-6'>
          <div className='bg-[#171616] rounded-full p-1'>
            <IoIosArrowBack size={28} />
            </div>
          <div className='bg-[#171616]  rounded-full p-1'>
            <IoIosArrowForward size={28} />
          </div>
          
        </div>
        <div>
          {showSearchInput ? <SearchInput /> : ""}
        </div>
        </div>
        <LoginSign />
      </div>
    </div>
  );
};

export default Nav;
