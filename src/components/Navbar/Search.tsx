import { useState } from 'react';
import { UilSearch } from '@iconscout/react-unicons';
import { useNavigate } from 'react-router-dom';

function Search({ flag }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      navigate(`/searchresult?query=${searchTerm}`);
    }
  };

  return (
    <div className={`mr-auto ml-4 relative bg-slate-700 rounded-3xl border-white border-solid border-2  ${flag === false ? 'hidden' : ''}`}>
      <label htmlFor="search-input" className="w-10 h-10 flex items-center justify-center absolute top-0 left-0">
        <UilSearch width={10} className="w-5 text-slate-300" />
      </label>
      <input
        autoFocus={true}
        type="text"
        id="search-input"
        className="h-10 pl-10 outline-none text-slate-400 font-medium bg-transparent rounded-3xl text-sm placeholder-slate-400 w-full pr-5 md:pr-0 md:max-w-full md:w-[22.75rem]"
        placeholder="What do you want to listen to?"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearch}
      />
    </div>
  );
}

export default Search;
